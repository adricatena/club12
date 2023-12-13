import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import { getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb } from "@/resources/player/types";
import { ActionIcon, Button, NumberInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

interface Props {
  playersFromDb: PlayerFromDb[] | null;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  let page = context.query?.page;
  let amount = context.query?.amount;
  if (!page || typeof page !== "string") {
    page = "0";
  }
  if (!amount || typeof amount !== "string") {
    amount = "15";
  }

  const client = getServerClient(context);
  const { data: playersFromDb } = await PlayerService.getPlayers(client, {
    page: Number(page),
    amount: Number(amount),
  });

  return {
    props: {
      playersFromDb,
    },
  };
};

export default function Players({ playersFromDb }: Props) {
  const [players, setPlayers] = useState<PlayerFromDb[]>(playersFromDb ?? []);
  const searchPlayerRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // TODO: esto tiene que buscar directo en la base de datos de todos los jugadores
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
            onSubmit={handleSearchPlayerSubmit}
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
          <Button onClick={() => router.push(`/jugadores?page=2&amount=20`)}>
            Navegar
          </Button>
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
