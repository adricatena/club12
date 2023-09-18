import Layout from "@/components/layout";
import { serverClient } from "@/database/clients";
import { PlayerController } from "@/entities/player/player.controller";
import type { Player } from "@/entities/player/player.types";
import { Alert, Button } from "@mantine/core";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
  playerFromDb: Player;
}> = async (context) => {
  console.log(context);
  const { query } = context;
  const { dni } = query;

  if (!isNaN(Number(dni))) {
    const playerController = new PlayerController(serverClient(context));
    const playerFromDb = await playerController.getPlayers(Number(dni));

    if (!playerFromDb || playerFromDb.length === 0) {
      return {
        props: {
          playerFromDb: null,
        },
      };
    }

    return {
      props: {
        playerFromDb,
      },
    };
  }

  return {
    props: {
      playerFromDb: null,
    },
  };
};

function Player({
  playerFromDb,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
  return <Layout>Player</Layout>;
}

export default Player;
