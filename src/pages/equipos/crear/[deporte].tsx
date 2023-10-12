import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import toast from "@/components/toast";
import { browserClient, getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb, PlayerSportFromDb } from "@/resources/player/types";
import { Table, Button, Loader, TextInput, Paper, Input, Radio, RadioGroup, Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { GetServerSideProps } from "next";
import { MouseEvent, useState } from "react";


interface Props {
  sportsFromDb: SportFromDb[];
  playerFromDb: PlayerFromDb[];
  playerSportsFromDb: PlayerSportFromDb[];
  teamSports: string[];
  onClickSport: (event: MouseEvent<HTMLInputElement>) => void;
}

type Form = {
  photoSrc: string;
  photo?: File;
  teamSports: string[];
  teamName: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const client = getServerClient(context);
  const {data:sportsFromDb} = await SportService.getSports(client); /* aca en un futuro va a venir solo el nombre del deporte getSport y le paso  el client y el nombre del deporte(el nombre viene de la ruta) */
  const {data:playerFromDb} = await PlayerService.getPlayers(client, /* enviar active:true: solo jugadores activos, y si no envio nada o false: devolver todos */);

  // for (const player of playerFromDb) {
  //   player.playerSportsFromDb = await PlayerService.getPlayerSports(client, player.id);
  // }

  return {
    props: {
      sportsFromDb,
      playerFromDb,
    },
  };
};

function CreateTeam({ sportsFromDb, playerFromDb, playerSportsFromDb }: Props) {
  const { setValues, reset, onSubmit, getInputProps, values } = useForm<Form>({
    initialValues: {
      teamName: "",
      photoSrc: "",
      teamSports: [sportsFromDb[0].name],
    },
  });

  const [isLoadingForm, setIsLoadingForm] = useState(false);

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

  function handleClickSportRadius({
    currentTarget,
  }: MouseEvent<HTMLInputElement>) {
    const { checked, value } = currentTarget;
    const sportName = sportsFromDb.find((sport) => sport.id === value)?.name;

    if (checked && sportName) {
      // Filtrar los jugadores que tienen el deporte seleccionado activo
      const filteredPlayers = playerFromDb.filter((player) =>
        player.playerSportsFromDb.some((sport: { name: string; }) => sport.name === sportName)
      );

      setPlayers(filteredPlayers);
      setValues({
        ...values,
        teamSports: [sportName],
      });
    }
  }





  //   async function handleSubmit(values: Form) {
  //     setIsLoadingForm(true);
  //     try {
  //       const { teamName } = values;

  //       if (!teamName)
  //         throw new Error("Es necesario el nombre del equipo");

  //       const newTeamData: Team = {
  //         name: teamName,
  //       }");

  //       const teamController = new teamController(client);
  //       await teamController.createTeam(
  //         newTeamData,
  //         sportsFromDb,
  //         values.photo,
  //       );

  //       toast.success(
  //         "Equipo creado correctamente",
  //         `El equipo ${teamName} se creo correctamente`,
  //       );
  //       reset();
  //     } catch (error) {
  //       console.error(error);
  //       const message =
  //         error instanceof Error
  //           ? error.message
  //           : "Ocurrio un error creando el jugador";
  //       toast.error("Error creando el jugador", message);
  //     } finally {
  //       setIsLoadingForm(false);
  //     }
  //   }
  const [players, setPlayers] = useState(playerFromDb.filter((player) => player.active));
  const [team, setTeam] = useState([] as PlayerFromDb[]);
  const [selectedPlayersInTeam, setSelectedPlayersInTeam] = useState<string[]>([]);

  const handleAddToTeam = () => {
    const playersToAdd = players.filter((player) =>
      selectedPlayers.includes(player.id)
    );
    setTeam([...team, ...playersToAdd]);
    setPlayers(players.filter((player) => !selectedPlayers.includes(player.id)));
    setSelectedPlayers([]);
    setSelectedPlayersInTeam([...selectedPlayersInTeam, ...playersToAdd.map((player) => player.id)]);
  };

    const handleRemoveFromTeam = () => {
    const playersToRemove = team.filter((player) =>
      selectedPlayers.includes(player.id)
    );

    setTeam(team.filter((player) => !selectedPlayers.includes(player.id)));
    setPlayers([...players, ...playersToRemove]);
    setSelectedPlayers([]);
  };

  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  const handleClickAddToTeam = (playerId: string) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  const [searchPlayers, setSearchPlayers] = useState<string>("");
  const [searchTeam, setSearchTeam] = useState<string>("");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchPlayers.toLowerCase()) ||
    player.lastname.toLowerCase().includes(searchPlayers.toLowerCase())||
    player.dni.toString().toLowerCase().includes(searchPlayers.toLowerCase())
  );

  const filteredTeam = team.filter((player) =>
    player.name.toLowerCase().includes(searchTeam.toLowerCase()) ||
    player.lastname.toLowerCase().includes(searchTeam.toLowerCase())||
    player.dni.toString().toLowerCase().includes(searchTeam.toLowerCase())
  );


  return (
    <Layout
      breadcrumbs={[
        { name: "Equipos", href: "/equipos" },
        { name: "Crear", href: "/equipos/crear" },
      ]}
    >
      {sportsFromDb ? (
        <form
          className="flex w-full items-stretch gap-7 self-center p-4"
        //   onSubmit={onSubmit(handleSubmit)}
        >
          <section className="flex w-full flex-col gap-5">
            <TextInput
              label="Nombre del Equipo"
              placeholder="Boston Celtics"
              required
              {...getInputProps("teamName")}
            />
            <div className="flex justify-center items-center space-x-4">
              <Paper
                shadow="xs"
                p="xs"
                style={{
                  maxWidth: "300px",
                  maxHeight: "500px",
                  minHeight: "400px",
                  minWidth: "200px",
                }}
              >
                <h2 className="text-lg font-semibold mb-4">Jugadores</h2>
                <Input
                  placeholder="Buscar jugador"
                  rightSection={<i className="fas fa-search"></i>}
                  value={searchPlayers}
                  onChange={(event) => setSearchPlayers(event.currentTarget.value)}
                />
                <div style={{ maxHeight: "350px", overflowY: "auto" }}>
                  <Table>
                    <Table.Tbody>
                      <Table.Th></Table.Th>
                      <Table.Th>Apellido</Table.Th>
                      <Table.Th>Nombre</Table.Th>
                      <Table.Th>DNI</Table.Th>
                      {filteredPlayers.map((player) => (
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
                  className="w-auto"
                >
                  Agregar
                </Button>
                <Button
                  onClick={handleRemoveFromTeam}
                  variant="danger"
                  className="w-auto"
                >
                  Quitar
                </Button>
              </div>
              <Paper
                shadow="xs"
                p="xs"
                style={{
                  maxWidth: "300px",
                  maxHeight: "500px",
                  minHeight: "400px",
                  minWidth: "200px",
                }}
              >
                <h2 className="text-lg font-semibold mb-4">Equipo</h2>

                <Input
                  placeholder="Buscar jugador"
                  rightSection={<i className="fas fa-search"></i>}
                  value={searchTeam}
                  onChange={(event) => setSearchTeam(event.currentTarget.value)}
                />
                <div style={{ maxHeight: "350px", overflowY: "auto" }}>
                  <Table>
                    <Table.Tbody>
                    <Table.Th></Table.Th>
                      <Table.Th>Apellido</Table.Th>
                      <Table.Th>Nombre</Table.Th>
                      <Table.Th>DNI</Table.Th>
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
          </section>
          <section className="grid">
            <div className="flex flex-col gap-5">
              <InputPhoto
                photoSrc={values.photoSrc}
                onClickFileButton={handleChangePhoto}
                onClickDeleteButton={handleClickDeletePhoto}
              />
              {sportsFromDb ? (
                <RadioGroup label="Deportes">
                  {sportsFromDb.map((sport) => (
                    <Radio
                      label={sport.name}
                      key={sport.id}
                      value={sport.id}
                      onClick={handleClickSportRadius}
                    />
                  ))}
                </RadioGroup>
              ) : (
                <Loader />
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoadingForm}
              className="place-self-end"
            >
              Crear jugador
            </Button>
          </section>
        </form>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}


export default CreateTeam;
