import Layout from "@/components/layout";
import { serverClient } from "@/database/clients";
import { PlayerController } from "@/entities/player/player.controller";
import type { Player } from "@/entities/player/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  playerFromDb: Player;
}> = async (context) => {
  console.log(context);
  const { query } = context;
  const { dni } = query;

  if (!dni) {
    return {
      redirect: {
        destination: "/jugadores",
        permanent: false,
      },
    };
  }
  const playerController = new PlayerController(serverClient(context));
  const playerFromDb = await playerController.getPlayers(Number(dni));

  return {
    props: {
      playerFromDb,
    },
  };
};

function Player({
  playerFromDb,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Layout>Player</Layout>;
}

export default Player;
