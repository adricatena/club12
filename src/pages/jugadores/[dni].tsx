import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import SportsSwitches from "@/components/sports-switches";
import { client, serverClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import type {
  PlayerFromDb,
  PlayerSportFromDb,
  UpdatePlayer,
} from "@/resources/player/types";
import SportService from "@/resources/sport/service";
import type { SportFromDb } from "@/resources/sport/types";
import {
  Alert,
  Button,
  NumberInput,
  Switch,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { type GetServerSideProps } from "next";
import Link from "next/link";
import { type MouseEvent } from "react";

interface Props {
  playerFromDb: PlayerFromDb | null;
  sportsFromDb: SportFromDb[];
  playerSportsFromDb: PlayerSportFromDb[] | null;
  photoUrl: string | null;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const emptyReturn: Props = {
    playerFromDb: null,
    sportsFromDb: [],
    playerSportsFromDb: [],
    photoUrl: null,
  };
  const { dni } = context.query;
  if (!dni || typeof dni !== "string") return { props: emptyReturn };

  const client = serverClient(context);
  const { data: playerFromDb } = await PlayerService.getPlayer(client, dni);
  if (!playerFromDb) return { props: emptyReturn };

  const { data: sportsFromDb } = await SportService.getSports(client);
  if (!sportsFromDb) return { props: emptyReturn };

  const { id, name, lastname } = playerFromDb;
  const { data: photoUrl } = PlayerService.getPlayerPhotoUrl(
    client,
    dni,
    name,
    lastname,
  );
  const { data: playerSportsFromDb } = await PlayerService.getPlayerSports(
    client,
    id,
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

function EditPlayer(props: Props) {
  const { playerFromDb, sportsFromDb, playerSportsFromDb, photoUrl } = props;
  const { setValues, onSubmit, getInputProps, values } = useForm<UpdatePlayer>({
    initialValues: {
      name: playerFromDb?.name || "",
      lastname: playerFromDb?.lastname || "",
      dni: playerFromDb?.dni ? playerFromDb.dni.toString() : "",
      birthdate: playerFromDb?.birthdate || "",
      email: playerFromDb?.email || "",
      cellphone: playerFromDb?.cellphone || "",
      observations: playerFromDb?.observations || "",
      photoSrc: photoUrl || "",
      active: playerFromDb?.active || false,
      activeSports:
        playerSportsFromDb?.map((playerSport) => playerSport.name) || [],
      federatedSports:
        playerSportsFromDb
          ?.filter((playerSport) => playerSport.federated)
          .map((playerSport) => playerSport.name) || [],
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

  function handleClickSportSwitch(event: MouseEvent<HTMLInputElement>) {
    const { checked, value } = event.currentTarget;
    if (checked) {
      setValues({
        activeSports: [...values.activeSports, value],
      });
    } else {
      const filteredActiveSports = values.activeSports.filter(
        (sport) => sport !== value,
      );
      const filteredFederatedSports = values.federatedSports.filter(
        (sport) => sport !== value,
      );
      setValues({
        activeSports: filteredActiveSports,
        federatedSports: filteredFederatedSports,
      });
    }
  }

  function handleClickFederatedSwitch(event: MouseEvent<HTMLInputElement>) {
    const { checked, value } = event.currentTarget;
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
  async function handleSubmit(values: UpdatePlayer) {
    await PlayerService.updatePlayer(client, values);
    console.log({ values });
  }

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
          {...getInputProps("observations")}
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
            checked={values.active}
            onChange={(checked) => {
              if (checked && values.active) {
                modals.openConfirmModal({
                  title: "¿Está seguro de que desea desactivar al jugador?",
                  children: (
                    <p>
                      Esta accion lo eliminara de los equipos en los que se
                      encuentra asociado
                    </p>
                  ),
                  labels: { confirm: "Sí", cancel: "No" },
                  confirmProps: { color: "red" },
                  onCancel: () => {},
                  onConfirm: () => {
                    setValues({
                      active: false,
                    });
                  },
                });
              } else {
                setValues({
                  active: true,
                });
              }
            }}
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

function Player(props: Props) {
  const { playerFromDb, sportsFromDb, playerSportsFromDb, photoUrl } = props;
  if (!playerFromDb)
    return (
      <Layout>
        <section className="mx-auto text-center">
          <Alert
            className="mx-auto mt-4 w-1/2"
            color="red"
            title="Jugador no encontrado"
          >
            El jugador con el DNI ingresado no se encuentra registrado en la
            base de datos. Por favor regresa al menu anterior
          </Alert>
          <Button component={Link} href="/jugadores" className="mt-4">
            Volver
          </Button>
        </section>
      </Layout>
    );

  return (
    <Layout
      breadcrumbs={[
        { name: "Jugadores", href: "/jugadores" },
        { name: "Editar", href: `/jugadores/${playerFromDb.dni}` },
      ]}
    >
      <EditPlayer
        playerFromDb={playerFromDb}
        sportsFromDb={sportsFromDb}
        playerSportsFromDb={playerSportsFromDb}
        photoUrl={photoUrl}
      />
    </Layout>
  );
}

export default Player;
