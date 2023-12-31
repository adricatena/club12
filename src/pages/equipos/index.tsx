import Layout from "@/components/layout";
import { TableSort } from "@/components/table-sort";
import toast from "@/components/toast";
import { browserClient, getServerClient } from "@/database/clients";
import SportService from "@/resources/sport/service";
import type { SportFromDb } from "@/resources/sport/types";
import TeamService from "@/resources/team/service";
import type { TeamFromDb } from "@/resources/team/types";
import { ActionIcon, Pagination, Select, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { type GetServerSideProps } from "next";
import router from "next/router";
import { useEffect, useState } from "react";

interface Props {
  defaultSportFromDb: SportFromDb | null;
  teamsFromDb: TeamFromDb[] | null;
  sportsFromDb: SportFromDb[];
  totalTeams: number;
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
      totalTeams: 0,
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
      totalTeams: teamsFromDb.length,
    },
  };
};

function Teams({
  teamsFromDb,
  defaultSportFromDb,
  sportsFromDb,
  totalTeams,
}: Props) {
  const [teams, setTeams] = useState<TeamFromDb[]>([]);
  const [selectedSport, setSelectedSport] = useState(defaultSportFromDb);
  const [searchTeam, setSearchTeam] = useState("");
  const [totalTeam, setTotalTeam] = useState(totalTeams);
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(1);

  const fetchTeams = async (
    selectedSportId: string,
    page: number,
    amount: number,
  ) => {
    const { data, message, ok } = await TeamService.getTeams(browserClient, {
      sport_id: selectedSportId,
    });

    if (data) {
      const startIndex = (page - 1) * amount;
      const endIndex = startIndex + amount;
      const teamsSubset = data.slice(startIndex, endIndex);
      setTeams(teamsSubset);
      setTotalTeam(data.length);
    } else {
      toast.error("Error buscando equipos", message);
      setTeams([]);
    }
  };

  useEffect(() => {
    router.push(
      `/equipos?sport=${selectedSport?.name}&page=${page}&amount=${amount}`,
      undefined,
      {
        shallow: true, // esto es para que solamente recargue la url
      },
    );
    fetchTeams(selectedSport?.id!, page, amount);
  }, [page, amount, selectedSport]);

  async function handleChangeSportSelect(selectedSportId: string | null) {
    setPage(1);
    setSelectedSport(
      sportsFromDb.find((sportFromDb) => sportFromDb.id === selectedSportId) ??
        null,
    );
    reset();
    fetchTeams(selectedSportId ?? "", 1, amount);
  }

  function handleSearchTeam(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTeam(event.target.value);

    const filteredTeams = teamsFromDb!.filter(
      (team) =>
        team.name.toLowerCase().includes(event.target.value.toLowerCase()) &&
        team.sport_id === selectedSport?.id,
    );

    setTeams(filteredTeams);
  }

  const handlePaginationChange = (newPage: number) => {
    setPage(newPage);
    router.push(
      `/equipos?sport=${selectedSport?.name}&page=${newPage}&amount=${amount}`,
      undefined,
    );
    fetchTeams(selectedSport?.id!, newPage, amount); // Fetch teams when pagination changes
  };

  const handleItemsPerPageChange = (newValue: number) => {
    setAmount(newValue);
    setPage(1);
    router.push(
      `/equipos?sport=${selectedSport?.name}&page=${1}&amount=${newValue}`,
      undefined,
    );
  };

  const reset = () => {
    setSearchTeam("");
    setPage(1);
  };
  useEffect(() => {
    console.log("Selected Sport:", selectedSport);
    console.log("Teams:", teams);
  }, [selectedSport, teams]);
  return (
    <Layout breadcrumbs={[{ name: "Equipos", href: "/equipos" }]}>
      <div>
        <section className="mb-4 flex items-center justify-between">
          <div className="mr-5">
            <TextInput
              label="Buscar"
              placeholder="Buscar..."
              rightSection={
                <ActionIcon type="submit" variant="transparent" size="md">
                  <IconSearch />
                </ActionIcon>
              }
              value={searchTeam}
              onChange={handleSearchTeam}
            />
          </div>
          <div className="w-52">
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
        </section>
      </div>
      {teams?.length ? (
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
      ) : (
        <p>No se encontraron equipos.</p>
      )}
      <div className="mt-4 flex justify-center">
        <Pagination
          total={Math.ceil(totalTeam / amount)}
          value={page}
          onChange={handlePaginationChange}
        />
        <Select
          className="ml-2"
          data={[1, 20, 30].map((value) => ({
            value: value.toString(),
            label: `${value}`,
          }))}
          placeholder={`Items por página: ${amount}`}
          onChange={(value) => handleItemsPerPageChange(Number(value))}
        />
      </div>
    </Layout>
  );
}

export default Teams;
