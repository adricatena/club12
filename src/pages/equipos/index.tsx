import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import { getServerClient } from "@/database/clients";
import SportService from "@/resources/sport/service";
import type { SportFromDb } from "@/resources/sport/types";
import TeamService from "@/resources/team/service";
import type { TeamFromDb } from "@/resources/team/types";
import { type GetServerSideProps } from "next";

interface Props {
  defaultSportFromDb: SportFromDb | null;
  teams: TeamFromDb[] | null;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const defaultSportName = "basket";
  const emptyReturn: { props: Props } = {
    props: {
      teams: null,
      defaultSportFromDb: null,
    },
  };
  const client = getServerClient(context);
  const { data: sportFromDb } = await SportService.getSport(client, {
    name: defaultSportName,
  });
  if (!sportFromDb) return emptyReturn;

  const { data: teams, ok } = await TeamService.getTeams(client, {
    sport_id: sportFromDb.id,
  });
  if (!ok || !teams) return emptyReturn;

  return {
    props: {
      teams,
      defaultSportFromDb: sportFromDb,
    },
  };
};

function Teams({ teams, defaultSportFromDb }: Props) {
  console.log({ teams, defaultSportFromDb });
  return (
    <Layout breadcrumbs={[{ name: "Equipos", href: "/equipos" }]}>
      Teams
      {teams && (
        <TableSort
          columnsKeys={[
            { key: "name", label: "Nombre" },
            { key: "sport_name", label: "Deporte" },
          ]}
          rowsData={teams.map((team) => ({
            ...team,
            sport_name: defaultSportFromDb!.name,
            path: `/equipos/${defaultSportFromDb!.name}/${team.name}`,
          }))}
        />
      )}
    </Layout>
  );
}

export default Teams;
