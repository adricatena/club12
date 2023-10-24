import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import { getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb } from "@/resources/player/types";
import { ActionIcon, NumberInput } from "@mantine/core";
import { IconArrowDown, IconArrowUp, IconSearch } from "@tabler/icons-react";
import type { GetServerSideProps } from "next";
import { FormEvent, MouseEvent, useRef, useState } from "react";

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

type ColumnKey = "dni" | "name" | "lastname" | "birthdate";

const columnsKeys: {
  key: ColumnKey;
  label: string;
}[] = [
  { key: "dni", label: "DNI" },
  { key: "name", label: "Nombre" },
  { key: "lastname", label: "Apellido" },
  { key: "birthdate", label: "Nacimiento" },
];

const enum OrderMethods {
  default,
  ascendent,
  descendent,
}

const ORDER_METHODS = {
  [OrderMethods.default]: OrderMethods.descendent,
  [OrderMethods.ascendent]: OrderMethods.descendent,
  [OrderMethods.descendent]: OrderMethods.ascendent,
};

export default function Players({ playersFromDb }: Props) {
  const [orderBy, setOrderBy] = useState<ColumnKey>();
  const [orderMethod, setOrderMethod] = useState(OrderMethods.default);
  const [players, setPlayers] = useState<PlayerFromDb[]>(playersFromDb ?? []);

  const searchPlayerRef = useRef<HTMLInputElement>(null);

  const Arrow =
    orderMethod === OrderMethods.ascendent ? IconArrowDown : IconArrowUp;

  function handleClickColumnHeader(event: MouseEvent<HTMLTableCellElement>) {
    const { id } = event.currentTarget;
    let newOrderMethod: OrderMethods;
    if (id === orderBy) {
      newOrderMethod = ORDER_METHODS[orderMethod];
    } else {
      newOrderMethod = ORDER_METHODS[OrderMethods.default];
      setOrderBy(id as ColumnKey);
    }
    const sortedPlayers = [...players];
    sortedPlayers.sort((prevPlayer, nextPlayer) => {
      const prevPlayerValue = prevPlayer[id as ColumnKey];
      const nextPlayerValue = nextPlayer[id as ColumnKey];

      const order = prevPlayerValue > nextPlayerValue;
      if (newOrderMethod === OrderMethods.ascendent) return order ? 1 : -1;
      return order ? -1 : 1;
    });
    setPlayers(sortedPlayers);
    setOrderMethod(newOrderMethod);
  }

  function handleSearchPlayerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchedInput = searchPlayerRef.current?.value;
    if (!searchedInput) {
      setPlayers(playersFromDb ?? []);
      return;
    }
    const filterPlayers = players.filter((player) =>
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
