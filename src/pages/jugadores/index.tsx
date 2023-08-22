import Layout from "@/components/layout";
import { PlayerController } from "@/entities/player/player.controller";
import { ActionIcon, NumberInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRef } from "react";
import useSWR from "swr";

export default function Players() {
  const { data: players } = useSWR(
    "getPlayers",
    async () => await PlayerController.getPlayers(),
  );
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
      ACA VA UNA TABLA CON LOS JUGADORES
      {players
        ? players.map((player) => (
            <h5 key={player.id}>
              {player.name} {player.lastname}
            </h5>
          ))
        : null}
    </Layout>
  );
}
