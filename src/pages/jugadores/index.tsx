import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import { getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb } from "@/resources/player/types";
import { ActionIcon, NumberInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import type { GetServerSideProps } from "next";
import { FormEvent, useRef, useState } from "react";

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
  const searchPlayerRef = useRef<HTMLInputElement>(null);

  function handleSearchPlayerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchedInput = searchPlayerRef.current?.value;

    if (!searchedInput) {
      setPlayers(playersFromDb ?? []);
      return;
    }

    const filterPlayers = playersFromDb!.filter((player) =>
      player.dni.toString().includes(searchedInput),
    );

    setPlayers(filterPlayers);
  }

  return (
    <Layout breadcrumbs={[{ name: "Jugadores", href: "/jugadores" }]}>
      <>
        <section className="flex items-center justify-between">
          <form
            className="flex items-center"
            onChange={handleSearchPlayerSubmit}
          >
            <NumberInput
              label="Buscar por DNI"
              hideControls
              rightSection={
                <ActionIcon type="submit" variant="transparent" size="md">
                  <IconSearch />
                </ActionIcon>
              }
              ref={searchPlayerRef}
            />
          </form>
        </section>
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
      </>
    </Layout>
  );
}
