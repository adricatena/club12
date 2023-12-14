import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import { browserClient, getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb } from "@/resources/player/types";
import { ActionIcon, NumberInput, Pagination, Select } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

interface Props {
  playersFromDb: PlayerFromDb[] | null;
  totalPlayers: number;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const page = Number(context.query?.page) || 0;
  const amount = Number(context.query?.amount) || 10;

  const client = getServerClient(context);
  const { data: playersFromDb } = await PlayerService.getPlayers(client, {
    page,
    amount,
  });

  const { data: totalPlayers } = await PlayerService.getTotalPlayers(client);

  return {
    props: {
      playersFromDb,
      totalPlayers,
    },
  };
};

export default function Players({ playersFromDb, totalPlayers }: Props) {
  const [players, setPlayers] = useState<PlayerFromDb[]>(playersFromDb ?? []);
  const searchPlayerRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(10);

  async function fetchData(page: number, amount: number) {
    const { data } = await PlayerService.getPlayers(browserClient, {
      page,
      amount,
    });

    if (data && data.length > 0) {
      setPlayers(data);
    } else {
      setPlayers([]);
    }
  }

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

  const handlePaginationChange = async (page: number) => {
    setPage(page);
    router.push(`/jugadores?page=${page}&amount=${amount}`, undefined);
    await fetchData(page - 1, amount);
  };

  const handleItemsPerPageChange = async (value: number) => {
    setAmount(value);
    setPage(1);
    router.push(`/jugadores?page=${page}&amount=${value}`, undefined);
    await fetchData(0, value);
  };

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
        <div className="mt-4 flex justify-center">
          <Pagination
            total={Math.ceil(totalPlayers / amount)}
            value={page}
            onChange={handlePaginationChange}
          />
          <Select
            className="ml-2"
            data={[10, 20, 30].map((value) => ({
              value: value.toString(),
              label: `${value}`,
            }))}
            placeholder={`Items por página: ${amount}`}
            onChange={(value) => handleItemsPerPageChange(Number(value))}
          />
        </div>
      </>
    </Layout>
  );
}
