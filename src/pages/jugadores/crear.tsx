import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import SportsSwitches from "@/components/sports-switches";
import { PlayerController } from "@/entities/player/player.controller";
import { Player } from "@/entities/player/types";
import { SportController } from "@/entities/sport/sport.controller";
import { Button, Loader, NumberInput, TextInput } from "@mantine/core";
import { FormEvent, MouseEvent, useRef, useState } from "react";
import useSWR from "swr";

function CreatePlayer() {
  const { data: sportsFromDb } = useSWR("getSports", (_) =>
    SportController.getSports().then((data) => data),
  );

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const birthdateRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cellphoneRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<File>();
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
    setPhoto(undefined);
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

      const newPlayerData: Player = {
        name: nameRef.current?.value as string,
        lastname: lastnameRef.current?.value as string,
        dni: Number(dniRef.current?.value),
        birthdate: birthdateRef.current?.value as string,
        email: emailRef.current?.value,
        cellphone: cellphoneRef.current?.value,
      };

      await PlayerController.createPlayer(
        newPlayerData,
        sportsFromDb,
        photo,
        activeSports,
        federatedSports,
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout breadcrumbs={["Jugadores", "Crear"]}>
      {sportsFromDb ? (
        <form
          className="flex w-full max-w-3xl items-stretch gap-7 p-4"
          onSubmit={handleSubmit}
        >
          <section className="flex w-full flex-col gap-5">
            <TextInput
              label="Nombre"
              placeholder="Juan"
              required
              ref={nameRef}
            />
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
                sports={sportsFromDb}
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
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

export default CreatePlayer;
