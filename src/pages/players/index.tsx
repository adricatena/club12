import Layout from "@/components/layout";
import { createServerClient } from "@/lib/supabase/clients";
import { GetServerSideProps } from "next";

type Player = {
  name: string;
  lastname: string;
  teams: {
    name: string;
  }[];
};

type Players = Player[] | null;

export const getServerSideProps: GetServerSideProps<{
  players: Players;
}> = async (context) => {
  const supabase = createServerClient(context);

  console.log({ context });

  const { data: players, error } = await supabase
    .from("players")
    .select("name, lastname, teams (name)");

  players?.forEach((player) => {
    console.log(player.teams);
  });

  return {
    props: {
      players,
    },
  };
};

export default function Players() {
  return <Layout>Jugadores</Layout>;
}
