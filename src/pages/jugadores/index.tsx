import Layout from "@/components/layout";
import { PlayerController } from "@/entities/player/player.controller";
import { Player } from "@/entities/player/types";
import { ActionIcon, Loader, NumberInput, Table } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRef, useState } from "react";
import useSWR from "swr";

const columnHelper = createColumnHelper<Player>();
const columns = [
  columnHelper.accessor("birthdate", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastname", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("cellphone", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dni", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
  }),
];

export default function Players() {
  const [columnsKeys, setColumnsKeys] = useState<string[]>([]);

  const { data: players } = useSWR("getPlayers", async () => {
    const data = (await PlayerController.getPlayers()) as Player[];
    setColumnsKeys(Object.keys(data));
    return data;
  });

  const table = useReactTable({
    data: players ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
      {players ? (
        <Table>
          <thead>
            <tr>
              {columnsKeys.map((columnKey) => (
                <th key={columnKey}>{columnKey}</th>
              ))}
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      ) : (
        <Loader />
      )}
      {/* <Table
        verticalSpacing="xs"
        fontSize="sm"
        striped
        highlightOnHover
        withBorder
        withColumnBorders
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table> */}
      {/* ACA VA UNA TABLA CON LOS JUGADORES
      {players
        ? players.map((player) => (
            <h5 key={player.id}>
              {player.name} {player.lastname}
            </h5>
          ))
        : null} */}
    </Layout>
  );
}
