import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import { getServerClient } from "@/database/clients";
import SportService from "@/resources/sport/service";
import TeamService from "@/resources/team/service";
import type { TeamFromDb } from "@/resources/team/types";
import { type GetServerSideProps } from "next";

interface Props {
  defaultSportName: string;
  teams: TeamFromDb[] | null;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const defaultSportName = "basket";
  const emptyReturn: { props: Props } = {
    props: {
      teams: null,
      defaultSportName,
    },
  };
  const client = getServerClient(context);
  const { data: sportsFromDb } = await SportService.getSport(client, {
    name: defaultSportName,
  });
  if (!sportsFromDb) return emptyReturn;

  const { data: teams, ok } = await TeamService.getTeams(client, {
    sport_id: sportsFromDb.id,
  });
  if (!ok || !teams) return emptyReturn;

  return {
    props: {
      teams,
      defaultSportName,
    },
  };
};

function Teams({ teams, defaultSportName }: Props) {
  console.log({ teams, defaultSportName });
  return (
    <Layout breadcrumbs={[{ name: "Equipos", href: "/equipos" }]}>
      Teams
      {teams && (
        <TableSort
          columnsHeaders={[
            { name: "name", label: "Nombre" },
            { label: "Deporte", name: "sport_id" },
          ]}
          data={teams.map((team) => ({ ...team, id: team.id }))}
        />
      )}
    </Layout>
  );
}

export default Teams;
