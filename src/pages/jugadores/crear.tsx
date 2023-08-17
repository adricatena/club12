import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import SportsSwitches from "@/components/sports-switches";
import { createServerClient, useSupabase } from "@/lib/supabase/clients";
import { Player } from "@/types/players";
import { Sport } from "@/types/sports";
import { Button, NumberInput, TextInput } from "@mantine/core";
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
  const supabase = useSupabase();
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
        (sport) => sport !== value,
      );
      const filteredFederatedSports = federatedSports.filter(
        (sport) => sport !== value,
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
        (sport) => sport !== value,
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
            (dbSport) => dbSport.name === activeSport,
          )?.id as string;
          const federated = Boolean(
            federatedSports.find(
              (federatedSport) => federatedSport === activeSport,
            ),
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
      <form
        className="flex w-full max-w-3xl items-stretch gap-7 p-4"
        onSubmit={handleSubmit}
      >
        <section className="flex w-full flex-col gap-5">
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
        <section className="grid">
          <div className="flex flex-col gap-5">
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
          <Button type="submit" className="place-self-end">
            Crear jugador
          </Button>
        </section>
      </form>
    </Layout>
  );
}

export default CreatePlayer;
