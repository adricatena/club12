import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import toast from "@/components/toast";
import { browserClient, getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb } from "@/resources/player/types";
import SportService from "@/resources/sport/service";
import { SportFromDb } from "@/resources/sport/types";
import TeamService from "@/resources/team/service";
import { TeamFromDb, UpdateTeam } from "@/resources/team/types";

import {
  Alert,
  Button,
  Checkbox,
  Input,
  Paper,
  Switch,
  Table,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  sportFromDb: SportFromDb | null;
  playersFromDb: PlayerFromDb[] | null;
  TeamFromDb: TeamFromDb | null;
  playersByTeams: PlayerFromDb[] | null;
  photoUrl: string | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const emptyReturn = {
    props: {
      playersFromDb: [],
      sportFromDb: null,
      TeamFromDb: null,
      playersByTeams: [],
      photoUrl: null,
    },
  };
  const sportFromUrl = String(context.query.sport);
  const nameFromUrl = String(context.query.name);

  if (!sportFromUrl || typeof sportFromUrl !== "string") return emptyReturn;
  if (!nameFromUrl || typeof nameFromUrl !== "string") return emptyReturn;

  const client = getServerClient(context);
  const { data: sportsFromDb } = await SportService.getSports(client);
  if (!sportsFromDb) return emptyReturn;

  const sportFromDb = sportsFromDb.find((sport) => {
    const sportNameLower = sport.name.toLowerCase();
    const sportUrlLower = sportFromUrl.toLowerCase();
    return sportNameLower === sportUrlLower;
  });

  const { data: TeamsFromDb } = await TeamService.getTeams(client, {
    sport_id: sportFromDb?.id,
  });
  if (!sportFromDb) return emptyReturn;

  const TeamFromDb = TeamsFromDb
    ? TeamsFromDb.find((team) => team.name.toLocaleLowerCase() === nameFromUrl)
    : null;

  const { data: playersFromDb } = await PlayerService.getPlayersSport(client, {
    sport_id: sportFromDb.id,
    free_agents: true,
  });

  const { data: playersByTeams } = await TeamService.getPlayerByTeam(
    client,
    TeamFromDb?.id || "",
  );
  const { data: photoUrl } = await TeamService.getTeamPhotoUrl(
    client,
    sportFromDb?.name || "",
    TeamFromDb?.name || "",
  );
  return {
    props: {
      playersFromDb,
      sportFromDb,
      TeamFromDb,
      playersByTeams,
      photoUrl,
    },
  };
};

function UpdateTeam({
  playersFromDb,
  sportFromDb,
  TeamFromDb,
  playersByTeams,
  photoUrl,
}: Props) {
  const router = useRouter();
  const { setValues, reset, onSubmit, getInputProps, values } =
    useForm<UpdateTeam>({
      initialValues: {
        name: TeamFromDb?.name || "",
        sport: sportFromDb || { name: "", id: "" },
        photoSrc: photoUrl || "",
        players: [],
        id: TeamFromDb!.id,
        active: TeamFromDb?.active || false,
      },
      validate: {
        name: (name) => {
          if (!name || name.trim() === "") {
            return "El nombre del equipo es obligatorio";
          }
          return null;
        },
      },
    });

  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const [players, setPlayers] = useState(
    playersFromDb?.filter((player) => player.active),
  );
  const [team, setTeam] = useState<PlayerFromDb[]>(playersByTeams || []);

  const [selectedPlayersInTeam, setSelectedPlayersInTeam] = useState<string[]>(
    [],
  );
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [isPlayersTableSelected, setIsPlayersTableSelected] = useState(false);

  const [searchPlayers, setSearchPlayers] = useState<string>("");
  const [searchTeam, setSearchTeam] = useState<string>("");

  const filteredPlayers = players?.filter(
    (player) =>
      player.name.toLowerCase().includes(searchPlayers.toLowerCase()) ||
      player.lastname.toLowerCase().includes(searchPlayers.toLowerCase()) ||
      player.dni.toString().toLowerCase().includes(searchPlayers.toLowerCase()),
  );

  const filteredTeam = team.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTeam.toLowerCase()) ||
      player.lastname.toLowerCase().includes(searchTeam.toLowerCase()) ||
      player.dni.toString().toLowerCase().includes(searchTeam.toLowerCase()),
  );

  function handleChangePhoto(file: File | null) {
    if (file) {
      setValues({
        photo: file,
        photoSrc: URL.createObjectURL(file),
      });
    }
  }

  function handleClickDeletePhoto() {
    setValues({
      photoSrc: "",
      photo: undefined,
    });
  }

  const handleAddToTeam = () => {
    const playersToAdd =
      players?.filter((player) => selectedPlayers.includes(player.id)) || [];
    setTeam([...team, ...playersToAdd]);
    values.players = [...team, ...playersToAdd];
    setPlayers(
      players?.filter((player) => !selectedPlayers.includes(player.id)),
    );
    setSelectedPlayersInTeam([
      ...selectedPlayersInTeam,
      ...playersToAdd.map((player) => player.id),
    ]);
    setSelectedPlayers([]);
  };

  const handleRemoveFromTeam = () => {
    const playersToRemove = team.filter((player) =>
      selectedPlayers.includes(player.id),
    );

    setTeam(team.filter((player) => !selectedPlayers.includes(player.id)));
    setPlayers([...(players ?? []), ...playersToRemove]);
    setSelectedPlayers([]);
  };

  const handleClickAddToTeam = (playerId: string) => {
    if (isPlayersTableSelected) {
      // Estás en la tabla de jugadores
      if (selectedPlayersInTeam.includes(playerId)) {
        // Si el jugador ya está en el equipo, lo deseleccionamos
        setSelectedPlayersInTeam(
          selectedPlayersInTeam.filter((id) => id !== playerId),
        );
      } else {
        // Si el jugador no está en el equipo, lo seleccionamos
        setSelectedPlayersInTeam([...selectedPlayersInTeam, playerId]);
      }
    } else {
      // Estás en la tabla de equipo
      if (selectedPlayers.includes(playerId)) {
        // Si el jugador ya está seleccionado, lo deseleccionamos
        setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
      } else {
        // Si el jugador no está seleccionado, lo seleccionamos
        setSelectedPlayers([...selectedPlayers, playerId]);
      }
    }
  };
  async function handleSubmit(values: UpdateTeam) {
    setIsLoadingForm(true);
    const { ok, message } = await TeamService.updateTeam(browserClient, {
      newData: values,
      oldData: { players: playersByTeams || [] },
    });

    if (ok) {
      toast.success(
        "Equipo creado correctamente",
        `El equipo ${values.name} se creo correctamente`,
      );
      router.replace(`/equipos`);
    } else toast.error("Error creando el equipo", message);

    setIsLoadingForm(false);
  }

  if (!playersFromDb || !TeamFromDb)
    return (
      <Layout>
        <section className="mx-auto text-center">
          <Alert className="mx-auto mt-4 w-1/2" color="red" title="Error">
            Error al cargar los datos del equipo. Por favor regresa al menu
            anterior
          </Alert>
          <Button component={Link} href="/equipos" className="mt-4">
            Volver
          </Button>
        </section>
      </Layout>
    );

  return (
    <Layout
      breadcrumbs={[
        { name: "Equipos", href: "/equipos" },
        { name: "Editar", href: "/equipos" },
      ]}
    >
      <form
        className="flex w-full items-stretch gap-7 self-center p-4"
        onSubmit={onSubmit(handleSubmit)}
      >
        <section className="flex w-full flex-col gap-5">
          <div className=" flex items-center justify-between gap-10">
            <TextInput
              label="Nombre del Equipo"
              placeholder="Boston Celtics"
              className="w-full"
              required
              value={values.name}
              onChange={(event) =>
                setValues({ ...values, name: event.currentTarget.value })
              }
            />
            <div>
              <p>Desactivar equipo</p>
              <div className="switch-container">
                <Switch
                  label={"Activo"}
                  checked={values.active}
                  onChange={(checked) => {
                    if (checked && values.active) {
                      modals.openConfirmModal({
                        title:
                          "¿Está seguro de que desea desactivar al Equipo?",
                        children: (
                          <p>
                            Esta acción eliminará al equipo y volverá a sus
                            jugadores como agentes libres
                          </p>
                        ),
                        labels: { confirm: "Sí", cancel: "No" },
                        confirmProps: { color: "red" },
                        onCancel: () => {},
                        onConfirm: () => {
                          setValues({
                            active: false,
                          });
                        },
                      });
                    } else {
                      setValues({
                        active: true,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <InputPhoto
              photoSrc={values.photoSrc}
              onClickFileButton={handleChangePhoto}
              onClickDeleteButton={handleClickDeletePhoto}
            />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Paper
              shadow="xs"
              p="xs"
              className="w-full"
              style={{ minHeight: "300px", minWidth: "300px" }}
            >
              <h2 className="mb-4 text-lg font-semibold">Jugadores</h2>
              <Input
                placeholder="Buscar jugador"
                rightSection={<i className="fas fa-search"></i>}
                value={searchPlayers}
                onChange={(event) =>
                  setSearchPlayers(event.currentTarget.value)
                }
              />
              <div style={{ maxHeight: "350px", overflowY: "auto" }}>
                <Table className="w-full">
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Th></Table.Th>
                      <Table.Th>Apellido</Table.Th>
                      <Table.Th>Nombre</Table.Th>
                      <Table.Th>DNI</Table.Th>
                    </Table.Tr>
                    {filteredPlayers?.map((player) => (
                      <Table.Tr key={player.id}>
                        <Table.Td>
                          <Checkbox
                            checked={selectedPlayers.includes(player.id)}
                            onChange={() => handleClickAddToTeam(player.id)}
                          />
                        </Table.Td>
                        <Table.Td>{`${player.lastname}`}</Table.Td>
                        <Table.Td>{`${player.name}`}</Table.Td>
                        <Table.Td>{`${player.dni}`}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            </Paper>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Button
                onClick={handleAddToTeam}
                variant="primary"
                className="w-[100px]"
              >
                Agregar
              </Button>
              <Button
                onClick={handleRemoveFromTeam}
                variant="danger"
                className="w-[100px]"
              >
                Quitar
              </Button>
            </div>
            <Paper
              shadow="xs"
              p="xs"
              className="w-full"
              style={{ minHeight: "300px", minWidth: "300px" }}
            >
              <h2 className="mb-4 text-lg font-semibold">Equipo</h2>
              <Input
                placeholder="Buscar jugador"
                rightSection={<i className="fas fa-search"></i>}
                value={searchTeam}
                onChange={(event) => setSearchTeam(event.currentTarget.value)}
              />
              <div style={{ maxHeight: "350px", overflowY: "auto" }}>
                <Table className="w-full">
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Th></Table.Th>
                      <Table.Th>Apellido</Table.Th>
                      <Table.Th>Nombre</Table.Th>
                      <Table.Th>DNI</Table.Th>
                    </Table.Tr>
                    {filteredTeam.map((player) => (
                      <Table.Tr key={player.id}>
                        <Table.Td>
                          <Checkbox
                            checked={selectedPlayers.includes(player.id)}
                            onChange={() => handleClickAddToTeam(player.id)}
                          />
                        </Table.Td>
                        <Table.Td>{`${player.lastname}`}</Table.Td>
                        <Table.Td>{`${player.name}`}</Table.Td>
                        <Table.Td>{`${player.dni}`}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            </Paper>
          </div>
          <Button
            type="submit"
            disabled={isLoadingForm}
            className="place-self-end"
          >
            Editar Equipo
          </Button>
        </section>
      </form>
    </Layout>
  );
}
export default UpdateTeam;
