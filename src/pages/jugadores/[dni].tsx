import Layout from "@/components/layout";
import { serverClient } from "@/database/clients";
import { PlayerController } from "@/entities/player/player.controller";
import { SportController } from "@/entities/sport/sport.controller";
import type { PlayerFromDb } from "@/entities/player/player.types";
import { Alert, Button, TextInput, NumberInput, Textarea, Switch } from "@mantine/core";
import { type GetServerSideProps } from "next";
import type { Sport } from "@/entities/sport/sport.types";
import Link from "next/link";
import toast from "@/components/toast";
import { MouseEvent, useState } from "react";
import SportsSwitches from "@/components/sports-switches";
import InputPhoto from "@/components/input-photo";
import { Form, useForm } from "@mantine/form";
import type { Player } from "@/entities/player/player.types";
import { PlayerSportFromDb } from "@/entities/playerSport.type";

type Form = {
  name: string;
  lastname: string;
  dni: string;
  birthdate: string;
  email: string;
  cellphone: string;
  photoSrc: string;
  photo?: File;
  observations: string;
  activeSports: string[];
  federatedSports: string[];
};

interface Props {
  playerFromDb: PlayerFromDb | null;
  sportsFromDb: Sport[];
  playerSportsFromDb: PlayerSportFromDb[] | null;
  photoUrl: string | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { query } = context;
  const dni = Number(query.dni);

  if (!dni) {
    return {
      props: {
        playerFromDb: null,
        sportsFromDb: [] || null,
        playerSportsFromDb: null,
        photoUrl: null,
      },
    };
  }

  const playerController = new PlayerController(serverClient(context));
  const playerFromDb = await playerController.getPlayer(dni);
  const client = serverClient(context);
  const sportController = new SportController(client);
  const sportsFromDb = await sportController.getSports();

  if (!playerFromDb) {
    return {
      props: {
        playerFromDb: null,
        sportsFromDb: [] || null,
        playerSportsFromDb: null,
        photoUrl : null,
      },
    };
  }

  const photoUrl = playerController.getPlayerPhoto(
    playerFromDb.dni,
    playerFromDb.name,
    playerFromDb.lastname,
  );

  const playerSportsFromDb = await playerController.getPlayerSports(
    playerFromDb.id,
  );

  return {
    props: {
      playerFromDb,
      sportsFromDb,
      playerSportsFromDb,
      photoUrl,
    },
  };
};

function EditPlayer({ playerFromDb, sportsFromDb, playerSportsFromDb,photoUrl }: Props) {
  const { setValues, onSubmit, getInputProps, values } = useForm<Form>({
    initialValues: {
      name: playerFromDb?.name|| "",
      lastname: playerFromDb?.lastname || "",
      dni: playerFromDb?.dni ? playerFromDb.dni.toString() : "",
      birthdate: playerFromDb?.birthdate || "",
      email: playerFromDb?.email || "",
      cellphone: playerFromDb?.cellphone || "",
      observations: playerFromDb?.observations || "",
      photoSrc: photoUrl || "",
      activeSports: playerFromDb
        ? (playerSportsFromDb || []).map((sport) => sport.name)
        : [],
      federatedSports: playerFromDb
        ? (playerSportsFromDb || []).filter((sport) => sport.federated).map((sport) => sport.name)
        : [],
    },
  });
  
  function handleChangePhoto(file: File | null) {
    if (file) {
      setValues({
        photo: file,
        photoSrc: URL.createObjectURL(file),
      });
    }
  }

  function handleClickDeletePhoto() {
    setValues({
      photoSrc: "",
      photo: undefined,
    });
  }
  
  function handleClickSportSwitch({
    currentTarget,
  }: MouseEvent<HTMLInputElement>) {
    const { checked, value } = currentTarget;
    if (checked) {
      if (!values.activeSports.includes(value)) {
        setValues({
          activeSports: [...values.activeSports, value],
        });
      }
    } else {
      const filteredActiveSports = values.activeSports.filter(
        (sport) => sport !== value
      );
      setValues({
        activeSports: [...filteredActiveSports],
      });
    }
  }

  function handleClickFederatedSwitch({
    currentTarget,
  }: MouseEvent<HTMLInputElement>) {
    const { checked, value } = currentTarget;
    if (checked) {
      setValues({
        federatedSports: [...values.federatedSports, value],
      });
    } else {
      const filteredFederatedSports = values.federatedSports.filter(
        (sport) => sport !== value,
      );
      setValues({
        federatedSports: filteredFederatedSports,
      });
    }
  }
  async function handleSubmit(values: Form ) {
    try {
      const { name, lastname, dni } = values;
  
      if (!(name && lastname && dni && sportsFromDb))
        throw new Error("Es necesario el nombre, apellido y DNI");
  
      const updatedPlayerData: Player = {
        name,
        lastname,
        dni: Number(dni),
        birthdate: values.birthdate,
        email: values.email,
        cellphone: values.cellphone,
        observations: values.observations,
      };
  
      // await playerController.updatePlayer(playerFromDb.id, updatedPlayerData);
  
      toast.success(
        "Jugador editado correctamente",
        `Los datos del jugador con DNI ${dni} se han actualizado correctamente`
      );
  
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error
          ? error.message
          : "Ocurrió un error al editar el jugador";
      toast.error("Error al editar el jugador", message);
    }  
  }
  // onClickDisablePlayer{
    
  // }

    return (

        <form
          className="flex w-full max-w-3xl items-stretch gap-7 self-center p-4"
          onSubmit={onSubmit(handleSubmit)}
        >
          <section className="flex w-full flex-col gap-5">
            <TextInput
              label="Nombre"
              placeholder="Juan"
              required
              {...getInputProps("name")}
            />
            <TextInput
              label="Apellido"
              placeholder="Perez"
              required
              {...getInputProps("lastname")}
            />
            <NumberInput
              label="DNI"
              placeholder="30123654"
              minLength={8}
              maxLength={9}
              hideControls
              required
              {...getInputProps("dni")}
            />
            <TextInput
              type="date"
              label="Nacimiento"
              placeholder="15/07/1995"
              required
              {...getInputProps("birthdate")}
            />
            <NumberInput
              label="Celular"
              placeholder="3435873290"
              minLength={8}
              maxLength={11}
              hideControls
              {...getInputProps("cellphone")}
            />
            <Textarea
              autosize
              minRows={2}
              maxRows={4}
              label="Observación"
              placeholder="Observaciones..."
              {...getInputProps("observation")}
            />
          </section>
          <section className="grid">
            <div className="flex flex-col gap-5">
              <InputPhoto
                photoSrc={values.photoSrc}
                onClickFileButton={handleChangePhoto}
                onClickDeleteButton={handleClickDeletePhoto}
              />
              <SportsSwitches
                sports={sportsFromDb}
                activeSports={values.activeSports}
                federatedSports={values.federatedSports}
                onClickSport={handleClickSportSwitch}
                onClickFederatedSport={handleClickFederatedSwitch}
              />
              <Switch
                label={"Activo"}
                className="pb-1"
                // onClick={onClickDisablePlayer}
              />
            </div>
            <Button
              type="submit"
              // disabled={isLoadingForm}
              className="place-self-end"
            >
              Editar jugador
            </Button>
          </section>
        </form>
    );
  }

function Player({ playerFromDb, sportsFromDb, playerSportsFromDb, photoUrl }: Props) {
  if (!playerFromDb) {
    return (
      <Layout>
        <section className="mx-auto text-center">
          <Alert
            className="mx-auto mt-4 w-1/2"
            color="red"
            title="Jugador no encontrado"
          >
            El jugador con el DNI ingresado no se encuentra registrado en la
            base de datos. Seleciona el boton de Volver para regresa al menu
            anterior
          </Alert>
          <Button component={Link} href="/jugadores" className="mt-4">
            Volver
          </Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout     
    breadcrumbs={[
      { name: "Jugadores", href: "/jugadores" },
      { name: "Editar", href: `/jugadores/${playerFromDb.dni}` },
    ]}
    >
      <EditPlayer playerFromDb={playerFromDb} sportsFromDb={sportsFromDb} playerSportsFromDb={playerSportsFromDb} photoUrl={photoUrl}  />
    </Layout>
  );
}

export default Player;
