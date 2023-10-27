import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import toast from "@/components/toast";
import { browserClient, getServerClient } from "@/database/clients";
import SportService from "@/resources/sport/service";
import type { SportFromDb } from "@/resources/sport/types";
import TeamService from "@/resources/team/service";
import type { TeamFromDb } from "@/resources/team/types";
import { Select } from "@mantine/core";
import { type GetServerSideProps } from "next";
import { useState } from "react";

interface Props {
  defaultSportFromDb: SportFromDb | null;
  teamsFromDb: TeamFromDb[] | null;
  sportsFromDb: SportFromDb[];
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const defaultSportName = "basket";
  const emptyReturn: { props: Props } = {
    props: {
      teamsFromDb: null,
      defaultSportFromDb: null,
      sportsFromDb: [],
    },
  };
  const client = getServerClient(context);
  const { data: defaultSportFromDb } = await SportService.getSport(client, {
    name: defaultSportName,
  });
  if (!defaultSportFromDb) return emptyReturn;

  const { data: sportsFromDb } = await SportService.getSports(client);
  if (!sportsFromDb) return emptyReturn;

  const { data: teamsFromDb, ok } = await TeamService.getTeams(client, {
    sport_id: defaultSportFromDb.id,
  });
  if (!ok || !teamsFromDb) return emptyReturn;

  return {
    props: {
      teamsFromDb,
      defaultSportFromDb,
      sportsFromDb,
    },
  };
};

function Teams({ teamsFromDb, defaultSportFromDb, sportsFromDb }: Props) {
  const [teams, setTeams] = useState(teamsFromDb);
  const [selectedSport, setSelectedSport] = useState(defaultSportFromDb);

  async function handleChangeSportSelect(selectedSportId: string) {
    setSelectedSport(
      sportsFromDb.find((sportFromDb) => sportFromDb.id === selectedSportId) ??
        null,
    );
    const { data, message, ok } = await TeamService.getTeams(browserClient, {
      sport_id: selectedSportId,
    });
    if (data) {
      setTeams(data);
    } else {
      toast.error("Error buscando equipos", message);
      setTeams([]);
    }
  }

  return (
    <Layout breadcrumbs={[{ name: "Equipos", href: "/equipos" }]}>
      <div>
        {/* agregar buscador */}
        <Select
          label="Elegir Deporte"
          placeholder={selectedSport?.name}
          onChange={handleChangeSportSelect}
          data={sportsFromDb.map((sport) => ({
            value: sport.id,
            label: sport.name,
          }))}
        />
      </div>
      {teams?.length && (
        <TableSort
          columnsKeys={[
            { key: "name", label: "Nombre" },
            { key: "sport_name", label: "Deporte" },
          ]}
          rowsData={teams.map((team) => ({
            ...team,
            sport_name: selectedSport?.name,
            path: `/equipos/${selectedSport?.name}/${team.name}`,
          }))}
        />
      )}
    </Layout>
  );
}

export default Teams;
