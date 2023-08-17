import Layout from "@/components/layout";
import { createServerClient } from "@/lib/supabase/clients";
import { ActionIcon, NumberInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRef } from "react";

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

export default function Players({
  players,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const searchPlayerRef = useRef<HTMLInputElement>(null);

  return (
    <Layout breadcrumbs={["Jugadores"]}>
      <section className="flex items-center justify-between">
        <form className="flex items-center">
          <NumberInput
            label="Buscar por DNI"
            hideControls
            rightSection={
              <ActionIcon variant="transparent" size="md">
                <IconSearch />
              </ActionIcon>
            }
            ref={searchPlayerRef}
          />
        </form>
      </section>
      ACA VA UNA TABLA CON LOS JUGADORES
      {players
        ? players.map((player) => (
            <h5 key={player.lastname}>
              {player.name} {player.lastname}
            </h5>
          ))
        : null}
    </Layout>
  );
}
