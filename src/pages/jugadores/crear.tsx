import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import SportsSwitches from "@/components/sports-switches";
import toast from "@/components/toast";
import { client, serverClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import type { NewPlayer } from "@/resources/player/types";
import SportService from "@/resources/sport/service";
import type { SportFromDb } from "@/resources/sport/types";
import { Button, Loader, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { GetServerSideProps } from "next";
import { useState, type MouseEvent } from "react";

interface Props {
  sportsFromDb: SportFromDb[];
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { data } = await SportService.getSports(serverClient(context));
  return { props: { sportsFromDb: data ?? [] } };
};

function CreatePlayer({ sportsFromDb }: Props) {
  const { setValues, reset, onSubmit, getInputProps, values } =
    useForm<NewPlayer>({
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
      validate: {
        dni: (dni) => (dni.length > 7 ? null : "Ingrese un DNI valido"),
        cellphone: (cell) =>
          cell.length > 10 || cell.length === 0
            ? null
            : "Ingrese un numero de celular valido",
      },
    });
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  function handleChangePhoto(file: File | null) {
    if (file)
      setValues({
        photo: file,
        photoSrc: URL.createObjectURL(file),
      });
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

  async function handleSubmit(values: NewPlayer) {
    setIsLoadingForm(true);
    const { ok, message } = await PlayerService.createPlayer(
      client,
      values,
      sportsFromDb,
    );
    if (ok) {
      toast.success(
        "Jugador creado correctamente",
        `El jugador con DNI ${values.dni} se creo correctamente`,
      );
      reset();
    } else toast.error("Error creando el jugador", message);
    setIsLoadingForm(false);
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

export default CreatePlayer;
