import { Table } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState, type MouseEvent } from "react";

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

interface Props {
  columnsKeys: {
    key: string;
    label: string;
  }[];
  rowsData:
}
export function TableSort({ columnsKeys, rowsData }: Props) {
  const [orderBy, setOrderBy] = useState<string>();
  const [orderMethod, setOrderMethod] = useState(OrderMethods.default);
  const [rows, setRows] = useState(rowsData)
  
  function handleClickColumnHeader(event: MouseEvent<HTMLTableCellElement>) {
    const { id } = event.currentTarget;
    let newOrderMethod: OrderMethods;
    if (id === orderBy) {
      newOrderMethod = ORDER_METHODS[orderMethod];
    } else {
      newOrderMethod = ORDER_METHODS[OrderMethods.default];
      setOrderBy(id);
    }
    const sortedPlayers = [...players];
    sortedPlayers.sort((prevPlayer, nextPlayer) => {
      const prevPlayerValue = prevPlayer[id];
      const nextPlayerValue = nextPlayer[id];

      const order = prevPlayerValue > nextPlayerValue;
      if (newOrderMethod === OrderMethods.ascendent) return order ? 1 : -1;
      return order ? -1 : 1;
    });
    setPlayers(sortedPlayers);
    setOrderMethod(newOrderMethod);
  }

  const Arrow =
    orderMethod === OrderMethods.ascendent ? IconChevronDown : IconChevronUp;

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {columnsKeys.map((columnKey) => (
            <Table.Th
              key={columnKey.key}
              id={columnKey.key}
              className="relative"
              onClick={handleClickColumnHeader}
            >
              {columnKey.label}
              {columnKey.key === orderBy ? (
                <Arrow className="absolute bottom-1.5" />
              ) : null}
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {players.map((player) => (
          <Table.Tr key={player.dni}>
            {columnsKeys.map((columnKey) => (
              <Table.Td key={columnKey.key}>
                <ULink href={`/jugadores/${player.dni}`}>
                  {player[columnKey.key]}
                </ULink>
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
