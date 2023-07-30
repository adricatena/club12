import Layout from "@/components/layout";
import { createServerClient } from "@/lib/supabase/clients";
import { Database } from "@/lib/supabase/types";
import {
  Avatar,
  Button,
  FileButton,
  Input,
  NumberInput,
  Switch,
  TextInput,
  createStyles,
} from "@mantine/core";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FormEvent, MouseEvent, useRef, useState } from "react";

type Sport = {
  name: string;
  id: string;
};

type Player = {
  name: string;
  lastname: string;
  dni: number;
  birthdate: string;
  email?: string;
  cellphone?: string;
};

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
        console.log({ data, error });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout breadcrumbs={["Jugadores", "Crear"]}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextInput
          label="Nombre"
          placeholder="Juan"
          required
          className={classes.name}
          ref={nameRef}
        />
        <TextInput
          label="Apellido"
          placeholder="Perez"
          required
          className={classes.lastname}
          ref={lastnameRef}
        />
        <NumberInput
          label="DNI"
          placeholder="30123654"
          minLength={8}
          maxLength={9}
          hideControls
          required
          className={classes.dni}
          ref={dniRef}
        />
        <Input.Wrapper
          label="Fecha de nacimiento"
          required
          className={classes.birthdate}
        >
          <Input
            type="date"
            placeholder="15/07/1995"
            required
            ref={birthdateRef}
          />
        </Input.Wrapper>
        <NumberInput
          label="Celular"
          placeholder="3435873290"
          minLength={8}
          maxLength={11}
          hideControls
          className={classes.cellphone}
          ref={cellphoneRef}
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="juanperez@gmail.com"
          className={classes.email}
          ref={emailRef}
        />
        <section className={classes.sportsContainer}>
          <Switch.Group label="Deportes">
            {sports?.map((sport) => (
              <Switch
                key={sport.id}
                value={sport.name}
                label={sport.name}
                className={classes.sportSwitch}
                onClick={handleClickSportSwitch}
              />
            ))}
          </Switch.Group>
          <Switch.Group label="Federado" value={federatedSports}>
            {sports?.map((sport) => (
              <Switch
                key={sport.id}
                value={sport.name}
                label={sport.name}
                disabled={!activeSports.includes(sport.name)}
                className={classes.sportSwitch}
                onClick={handleClickFederatedSwitch}
              />
            ))}
          </Switch.Group>
        </section>
        <Input.Wrapper label="Foto" className={classes.photoWrapper}>
          <section className={classes.photoContainer}>
            <span className={classes.photoButtons}>
              <FileButton accept="image/*" onChange={handleChangePhoto}>
                {(props) => (
                  <Button {...props} size="xs">
                    Seleccionar archivo
                  </Button>
                )}
              </FileButton>
              <Button
                color="gray"
                size="xs"
                fullWidth
                onClick={handleClickDeletePhoto}
              >
                Eliminar archivo
              </Button>
            </span>
            <Avatar radius="xs" size="xl" src={photoSrc} />
          </section>
        </Input.Wrapper>
        <Button type="submit" className={classes.submit}>
          Crear jugador
        </Button>
      </form>
    </Layout>
  );
}

const useClasses = createStyles((theme) => ({
  form: {
    width: "100%",
    paddingInline: theme.spacing.md,
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    gridTemplateRows: "repeat(5, min-content)",
    gridTemplateAreas: `
      "name name name lastname lastname lastname"
      "dni dni birthdate birthdate cellphone cellphone"
      "email email email email email email"
      "sports sports photoWrapper photoWrapper photoWrapper photoWrapper"
      ". . . . submit submit"`,
    columnGap: theme.spacing.lg,
    rowGap: theme.spacing.xl,
  },
  name: {
    gridArea: "name",
  },
  lastname: {
    gridArea: "lastname",
  },
  dni: {
    gridArea: "dni",
  },
  birthdate: {
    gridArea: "birthdate",
  },
  cellphone: {
    gridArea: "cellphone",
  },
  email: {
    gridArea: "email",
  },
  photoWrapper: {
    gridArea: "photoWrapper",
  },
  photoContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: theme.spacing.lg,
  },
  photoButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing.xs,
  },
  sportsContainer: {
    gridArea: "sports",
  },
  sportSwitch: {
    marginBottom: theme.radius.sm,
  },
  submit: {
    gridArea: "submit",
    placeSelf: "end",
  },
}));

export default CreatePlayer;
