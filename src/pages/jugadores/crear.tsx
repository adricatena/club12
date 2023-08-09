import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import SportsSwitches from "@/components/sports-switches";
import { createServerClient } from "@/lib/supabase/clients";
import { Database } from "@/lib/supabase/types";
import { Player } from "@/types/players";
import { Sport } from "@/types/sports";
import {
  Avatar,
  Button,
  FileButton,
  Group,
  Input,
  NumberInput,
  Stack,
  Switch,
  TextInput,
  Title,
  createStyles,
} from "@mantine/core";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { wrap } from "module";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FormEvent, MouseEvent, useRef, useState } from "react";

export const getServerSideProps: GetServerSideProps<{
  sports: Sport[];
}> = async (context) => {
  const supabase = createServerClient(context);

  const { data: sports, error } = await supabase
    .from("sports")
    .select("name, id");

  if (!sports) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      sports,
    },
  };
};

function CreatePlayer({
  sports,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { classes } = useClasses();
  const supabase = useSupabaseClient<Database>();

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const birthdateRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cellphoneRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoSrc, setPhotoSrc] = useState("");
  const [activeSports, setActiveSports] = useState<string[]>([]);
  const [federatedSports, setFederatedSports] = useState<string[]>([]);

  function handleChangePhoto(file: File | null) {
    if (file) {
      setPhoto(file);
      setPhotoSrc(URL.createObjectURL(file));
    }
  }

  function handleClickDeletePhoto() {
    setPhoto(null);
    setPhotoSrc("");
  }

  function handleClickSportSwitch({
    currentTarget,
  }: MouseEvent<HTMLInputElement>) {
    const { checked, value } = currentTarget;
    if (checked) {
      setActiveSports([...activeSports, value]);
    } else {
      const filteredActiveSports = activeSports.filter(
        (sport) => sport !== value
      );
      const filteredFederatedSports = federatedSports.filter(
        (sport) => sport !== value
      );
      setActiveSports([...filteredActiveSports]);
      setFederatedSports([...filteredFederatedSports]);
    }
  }

  function handleClickFederatedSwitch({
    currentTarget,
  }: MouseEvent<HTMLInputElement>) {
    const { checked, value } = currentTarget;
    if (checked) {
      setFederatedSports([...federatedSports, value]);
    } else {
      const filteredFederatedSports = federatedSports.filter(
        (sport) => sport !== value
      );
      setFederatedSports(filteredFederatedSports);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const { current: name } = nameRef;
      const { current: lastname } = lastnameRef;
      const { current: dni } = dniRef;
      if (!(name && lastname && dni))
        throw new Error("Es necesario el nombre, apellido y dni");

      if (photo) {
        const fileName = `${dni.value}_${name.value}_${lastname.value}`;
        const { data, error } = await supabase.storage
          .from("players")
          .upload(`public/${fileName}`, photo);
      }

      const newPlayerData: Player = {
        name: nameRef.current?.value as string,
        lastname: lastnameRef.current?.value as string,
        dni: Number(dniRef.current?.value),
        birthdate: birthdateRef.current?.value as string,
        email: emailRef.current?.value,
        cellphone: cellphoneRef.current?.value,
      };
      const { data: player, error } = await supabase
        .from("players")
        .insert({ ...newPlayerData })
        .select("id")
        .limit(1)
        .single();
      if (error) throw new Error(error.message);

      if (activeSports.length) {
        const playersSportsInsert = activeSports.map((activeSport) => {
          const sport_id = sports.find(
            (dbSport) => dbSport.name === activeSport
          )?.id as string;
          const federated = Boolean(
            federatedSports.find(
              (federatedSport) => federatedSport === activeSport
            )
          );
          return {
            player_id: player.id,
            sport_id,
            federated,
          };
        });
        const { data, error } = await supabase
          .from("players_sports")
          .insert(playersSportsInsert)
          .select("*")
          .limit(1)
          .single();
        if (error) throw new Error(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout breadcrumbs={["Jugadores", "Crear"]}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <section className={classes.inputs}>
          <TextInput label="Nombre" placeholder="Juan" required ref={nameRef} />
          <TextInput
            label="Apellido"
            placeholder="Perez"
            required
            ref={lastnameRef}
          />
          <NumberInput
            label="DNI"
            placeholder="30123654"
            minLength={8}
            maxLength={9}
            hideControls
            required
            ref={dniRef}
          />
          <TextInput
            type="date"
            label="Nacimiento"
            placeholder="15/07/1995"
            required
            ref={birthdateRef}
          />
          <NumberInput
            label="Celular"
            placeholder="3435873290"
            minLength={8}
            maxLength={11}
            hideControls
            ref={cellphoneRef}
          />
          <TextInput
            type="email"
            label="Email"
            placeholder="juanperez@gmail.com"
            ref={emailRef}
          />
        </section>
        <section className={classes.otherInputs}>
          <div className={classes.photoSwitch}>
            <InputPhoto
              photoSrc={photoSrc}
              onClickFileButton={handleChangePhoto}
              onClickDeleteButton={handleClickDeletePhoto}
            />
            <SportsSwitches
              sports={sports}
              activeSports={activeSports}
              federatedSports={federatedSports}
              onClickSport={handleClickSportSwitch}
              onClickFederatedSport={handleClickFederatedSwitch}
            />
          </div>
          <Button type="submit" className={classes.submitButton}>
            Crear jugador
          </Button>
        </section>
      </form>
    </Layout>
  );
}

const useClasses = createStyles((theme) => ({
  form: {
    padding: theme.spacing.md,
    maxWidth: theme.breakpoints.sm,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: theme.spacing.xl,
  },
  inputs: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.lg,
  },
  otherInputs: {
    display: "grid",
  },
  photoSwitch: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.lg,
  },
  submitButton: {
    placeSelf: "end",
  },
}));

export default CreatePlayer;
