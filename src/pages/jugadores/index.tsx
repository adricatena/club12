import Layout from "@/components/layout";
import ULink from "@/components/unstyled-link";
import { serverClient } from "@/database/clients";
import { PlayerController } from "@/entities/player/player.controller";
import type { Player } from "@/entities/player/player.types";
import { ActionIcon, Loader, NumberInput, Table } from "@mantine/core";
import { IconArrowDown, IconArrowUp, IconSearch } from "@tabler/icons-react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FormEvent, MouseEvent, useRef, useState } from "react";

export const getServerSideProps: GetServerSideProps<{
  playersFromDb: Player[];
}> = async (context) => {
  const client = serverClient(context);
  const playerController = new PlayerController(client);
  const playersFromDb = (await playerController.getPlayers()) as Player[];

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

export default function Players({
  playersFromDb,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [orderBy, setOrderBy] = useState<ColumnKey>();
  const [orderMethod, setOrderMethod] = useState(OrderMethods.default);
  const [players, setPlayers] = useState<Player[]>(playersFromDb);

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
      setPlayers(playersFromDb);
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
        {players ? (
          <Table>
            <thead>
              <tr>
                {columnsKeys.map((columnKey) => (
                  <th
                    key={columnKey.key}
                    id={columnKey.key}
                    className="relative"
                    onClick={handleClickColumnHeader}
                  >
                    {columnKey.label}
                    {columnKey.key === orderBy ? (
                      <Arrow className="absolute bottom-1.5" />
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.dni}>
                  {columnsKeys.map((columnKey) => (
                    <td key={columnKey.key}>
                      <ULink href={`/jugadores/${player.dni}`}>
                        {player[columnKey.key]}
                      </ULink>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Loader />
        )}
      </>
    </Layout>
  );
}
