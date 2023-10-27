import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import { getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb } from "@/resources/player/types";
import type { GetServerSideProps } from "next";
import { useState } from "react";

interface Props {
  playersFromDb: PlayerFromDb[] | null;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { data: playersFromDb } = await PlayerService.getPlayers(
    getServerClient(context),
  );
  return {
    props: {
      playersFromDb,
    },
  };
};

export default function Players({ playersFromDb }: Props) {
  const [players, setPlayers] = useState<PlayerFromDb[]>(playersFromDb ?? []);

  return (
    <Layout breadcrumbs={[{ name: "Jugadores", href: "/jugadores" }]}>
      <TableSort
        columnsKeys={[
          { label: "DNI", key: "dni" },
          { label: "Nombre", key: "name" },
          { label: "Apellido", key: "lastname" },
          { label: "Nacimiento", key: "birthdate" },
        ]}
        rowsData={players.map((player) => ({
          ...player,
          path: `/jugadores/${player.dni}`,
        }))}
      />
    </Layout>
  );
}
