import Layout from "@/components/layout";
import { createServerClient } from "@/lib/supabase/clients";
import { ActionIcon, Button, NumberInput, createStyles } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const { classes } = useClasses();
  const searchPlayerRef = useRef<HTMLInputElement>(null);

  return (
    <Layout breadcrumbs={["Jugadores"]}>
      <section className={classes.searchSection}>
        <form className={classes.searchPlayerForm}>
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
        <Button component={Link} href="/jugadores/crear" size="xs">
          Crear jugador
        </Button>
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

const useClasses = createStyles((theme) => ({
  searchSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchPlayerForm: {
    display: "flex",
    alignItems: "center",
  },
}));
