import Layout from "@/components/layout";
import { ActionIcon, NumberInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRef } from "react";

export function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Players({ players }) {
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
            <h5 key={player.lastname}>
              {player.name} {player.lastname}
            </h5>
          ))
        : null}
    </Layout>
  );
}
