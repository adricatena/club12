import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import SportsSwitches from "@/components/sports-switches";
import toast from "@/components/toast";
import { client, serverClient } from "@/database/clients";
import { PlayerController } from "@/entities/player/player.controller";
import type { Player } from "@/entities/player/player.types";
import { SportController } from "@/entities/sport/sport.controller";
import type { Sport } from "@/entities/sport/sport.types";
import { Button, Loader, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { GetServerSideProps } from "next";
import { MouseEvent, useState } from "react";

interface Props {
  sportsFromDb: Sport[];
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const client = serverClient(context);
  const sportController = new SportController(client);
  const sportsFromDb = await sportController.getSports();

  return {
    props: {
      sportsFromDb,
    },
  };
};

function CreatePlayer({ sportsFromDb }: Props) {
  const { setValues, reset, onSubmit, getInputProps, values } = useForm<Form>({
    initialValues: {
      name: "",
      lastname: "",
      dni: "",
      birthdate: "",
      email: "",
      cellphone: "",
      photoSrc: "",
      activeSports: [],
      federatedSports: [],
    },
  });

  const [isLoadingForm, setIsLoadingForm] = useState(false);

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
        activeSports: [...filteredActiveSports],
        federatedSports: [...filteredFederatedSports],
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

  async function handleSubmit(values: Form) {
    setIsLoadingForm(true);
    try {
      const { name, lastname, dni } = values;

      if (!(name && lastname && dni && sportsFromDb))
        throw new Error("Es necesario el nombre, apellido y dni");

      const newPlayerData: Player = {
        name,
        lastname,
        dni: Number(dni),
        birthdate: values.birthdate,
        email: values.email,
        cellphone: values.cellphone,
      };

      const playerController = new PlayerController(client);
      await playerController.createPlayer(
        newPlayerData,
        sportsFromDb,
        values.photo,
        values.activeSports,
        values.federatedSports,
      );

      toast.success(
        "Jugador creado correctamente",
        `El jugador con DNI ${dni} se creo correctamente`,
      );
      reset();
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error
          ? error.message
          : "Ocurrio un error creando el jugador";
      toast.error("Error creando el jugador", message);
    } finally {
      setIsLoadingForm(false);
    }
  }

  return (
    <Layout
      breadcrumbs={[
        { name: "Jugadores", href: "/jugadores" },
        { name: "Crear", href: "/jugadores/crear" },
      ]}
    >
      {sportsFromDb ? (
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
            <TextInput
              type="email"
              label="Email"
              placeholder="juanperez@gmail.com"
              {...getInputProps("email")}
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
            </div>
            <Button
              type="submit"
              disabled={isLoadingForm}
              className="place-self-end"
            >
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

type Form = {
  name: string;
  lastname: string;
  dni: string;
  birthdate: string;
  email: string;
  cellphone: string;
  photoSrc: string;
  photo?: File;
  activeSports: string[];
  federatedSports: string[];
};

export default CreatePlayer;
