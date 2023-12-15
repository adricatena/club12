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

const DEFAULT_PAGE = 0;
const DEFAULT_AMOUNT = 15;

interface Props {
  playersFromDb: PlayerFromDb[] | null;
  totalPlayersFromDb: number;
  page: number;
  amount: number;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  let page = Number(context.query?.page) || DEFAULT_PAGE;
  page = page < 0 ? DEFAULT_PAGE : page;

  let amount = Number(context.query?.amount) || DEFAULT_AMOUNT;
  amount = amount < 2 ? DEFAULT_AMOUNT : amount;

  const client = getServerClient(context);
  const { data: playersFromDb } = await PlayerService.getPlayers(client, {
    page: page - 1,
    amount,
  });

  const { data: totalPlayersFromDb } =
    await PlayerService.getTotalPlayers(client);

  return {
    props: {
      playersFromDb,
      totalPlayersFromDb,
      page,
      amount,
    },
  };
};

export default function Players({
  playersFromDb,
  totalPlayersFromDb,
  page: pageFromDb,
  amount: amoubtFromDb,
}: Props) {
  const [players, setPlayers] = useState<PlayerFromDb[]>(playersFromDb ?? []);
  const searchPlayerRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [totalPlayers, setTotalPlayers] = useState(totalPlayersFromDb);
  const [page, setPage] = useState(pageFromDb);
  const [amount, setAmount] = useState(amoubtFromDb);

  async function fetchData(page: number, amount: number) {
    const { data } = await PlayerService.getPlayers(browserClient, {
      page: page - 1,
      amount,
    });

    if (data && data.length > 0) {
      setPlayers(data);
    } else {
      setPlayers([]);
    }
  }

  async function handleSearchPlayerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchedInput = searchPlayerRef.current?.value;

    if (!searchedInput) {
      setPlayers(playersFromDb ?? []);
      setTotalPlayers(totalPlayersFromDb);
      router.push(`/jugadores?page=${page}&amount=${DEFAULT_AMOUNT}`);
    } else {
      const { data: filterPlayers } = await PlayerService.searchPlayers(
        browserClient,
        { dni: searchedInput },
      );

      setPlayers(filterPlayers ?? []);
      setTotalPlayers(filterPlayers?.length ?? 0);
      router.push(
        `/jugadores?page=${page}&amount=${DEFAULT_AMOUNT}&search=${searchedInput}`,
      );
    }

    setPage(1);
  }

  const handlePaginationChange = async (page: number) => {
    setPage(page);
    router.push(`/jugadores?page=${page}&amount=${amount}`, undefined);
    await fetchData(page, amount);
  };

  const handleItemsPerPageChange = async (value: number) => {
    setAmount(value);
    router.push(`/jugadores?page=${1}&amount=${value}`, undefined);
    setPage(1);
    await fetchData(1, value);
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
