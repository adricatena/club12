import Layout from "@/components/layout";
import { createServerClient } from "@/lib/supabase/clients";
import {
  ActionIcon,
  Avatar,
  Button,
  FileButton,
  Flex,
  Input,
  NumberInput,
  Switch,
  TextInput,
  createStyles,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FormEvent, MouseEvent, useRef, useState } from "react";

type Sport = {
  name: string;
  id: string;
};

export const getServerSideProps: GetServerSideProps<{
  sports: Sport[] | null;
}> = async (context) => {
  const supabase = createServerClient(context);

  const { data: sports, error } = await supabase
    .from("sports")
    .select("name, id");

  console.log({ sports });

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
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const birthdateRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cellphoneRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoSrc, setPhotoSrc] = useState("");
  /* const [activeSports, setActiveSports] = useState(
    sports?.map((sport) => ({ sport: sport.name, federated: false }))
  ); */
  const activeSportsRef = useRef(
    sports?.map((sport) => ({
      name: sport.name,
      active: false,
      federated: false,
    }))
  );

  console.log({ sports });

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

  function handleClickActiveSport({
    currentTarget,
  }: MouseEvent<HTMLInputElement>) {
    const { checked, value } = currentTarget;
    const { current: activeSports } = activeSportsRef;

    activeSports?.forEach((sport) => {
      if (sport.name === value) {
        sport.active = checked;
      }
    });
    console.log(activeSports);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
              <ActionIcon
                color="dark"
                size="lg"
                radius="xl"
                onClick={handleClickDeletePhoto}
              >
                <IconTrash />
              </ActionIcon>
            </span>
            <Avatar radius="xs" size="xl" src={photoSrc} />
          </section>
        </Input.Wrapper>
        <Switch.Group label="Deportes" className={classes.sports}>
          {sports?.map((sport) => (
            <Switch
              key={sport.id}
              value={sport.name}
              label={sport.name}
              onClick={handleClickActiveSport}
            />
          ))}
        </Switch.Group>
        <Switch.Group label="Federado" className={classes.federated}>
          {sports?.map((sport) => (
            <Switch
              key={sport.id}
              value={sport.name}
              label={sport.name}
              disabled
              onClick={(e) => console.log(e)}
            />
          ))}
        </Switch.Group>
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
      "photoWrapper photoWrapper photoWrapper photoWrapper . ."
      "sports sports federated federated submit submit"`,
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
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: theme.spacing.xs,
  },
  sports: {
    gridArea: "sports",
  },
  federated: {
    gridArea: "federated",
  },
  submit: {
    gridArea: "submit",
    placeSelf: "end",
  },
}));

export default CreatePlayer;
