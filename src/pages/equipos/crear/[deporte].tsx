import InputPhoto from "@/components/input-photo";
import Layout from "@/components/layout";
import toast from "@/components/toast";
import { browserClient, getServerClient } from "@/database/clients";
import PlayerService from "@/resources/player/service";
import { PlayerFromDb } from "@/resources/player/types";
import SportService from "@/resources/sport/service";
import { SportFromDb } from "@/resources/sport/types";
import TeamService from "@/resources/team/service";
import { NewTeam } from "@/resources/team/types";
import { Button, Checkbox, Input, Paper, Table, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { GetServerSideProps } from "next";
import { useState } from "react";


interface Props {
  sportFromDb: SportFromDb | null;
  playersFromDb: PlayerFromDb[] | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const emptyReturn = {
    props: {
      playersFromDb: [],
      sportFromDb: null,
    }
  }
  const sportFromUrl = context.query.deporte;
  if (!sportFromUrl || typeof (sportFromUrl) !== 'string') return emptyReturn;

  const client = getServerClient(context);
  const { data: sportsFromDb } = await SportService.getSports(client);
  if (!sportsFromDb) return emptyReturn;

  const sportFromDb = sportsFromDb.filter((sport) => sport.name.toLowerCase() === sportFromUrl)[0]
  if (!sportFromDb) return emptyReturn;

  const { data: playersFromDb } = await PlayerService.getPlayersSport(client, { sport_id: sportFromDb.id,free_agents:true })


  return {
    props: {
      playersFromDb,
      sportFromDb,
    },
  };
};

function CreateTeam({ playersFromDb, sportFromDb }: Props) {
  const { setValues, reset, onSubmit, getInputProps, values } = useForm<NewTeam>({
    initialValues: {
      name: "",
      sport: sportFromDb || { name: "", id: "" },
      photoSrc: "",
      players: [],
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

   async function handleSubmit(values: NewTeam) {
    console.log('Datos a enviar:', values);
     setIsLoadingForm(true);
       const { ok, message } = await TeamService.createTeam( 
        browserClient,
        values,
      );

if(ok){
       toast.success(
         "Equipo creado correctamente",
         `El equipo ${values.name} se creo correctamente`,
       );
       reset();}
       else toast.error("Error creando el equipo", message);
     
       setIsLoadingForm(false);
   }

  const [players, setPlayers] = useState(
    playersFromDb?.filter((player) =>
      player.active
    )
  );
  const [team, setTeam] = useState([] as PlayerFromDb[]);
  const [selectedPlayersInTeam, setSelectedPlayersInTeam] = useState<string[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [isPlayersTableSelected, setIsPlayersTableSelected] = useState(false);

  const handleAddToTeam = () => {
    const playersToAdd = players?.filter((player) =>
      selectedPlayers.includes(player.id)
    ) || [];
    setTeam([...team, ...playersToAdd]);
    values.players = [...team, ...playersToAdd]
    setPlayers(players?.filter((player) => !selectedPlayers.includes(player.id)));
    setSelectedPlayersInTeam([...selectedPlayersInTeam, ...playersToAdd.map((player) => player.id)]);
    setSelectedPlayers([]);
  };

  const handleRemoveFromTeam = () => {
    const playersToRemove = team.filter((player) =>
      selectedPlayers.includes(player.id)
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
        setSelectedPlayersInTeam(selectedPlayersInTeam.filter((id) => id !== playerId));
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

  const [searchPlayers, setSearchPlayers] = useState<string>("");
  const [searchTeam, setSearchTeam] = useState<string>("");

  const filteredPlayers = players?.filter((player) =>
    player.name.toLowerCase().includes(searchPlayers.toLowerCase()) ||
    player.lastname.toLowerCase().includes(searchPlayers.toLowerCase()) ||
    player.dni.toString().toLowerCase().includes(searchPlayers.toLowerCase())
  );

  const filteredTeam = team.filter((player) =>
    player.name.toLowerCase().includes(searchTeam.toLowerCase()) ||
    player.lastname.toLowerCase().includes(searchTeam.toLowerCase()) ||
    player.dni.toString().toLowerCase().includes(searchTeam.toLowerCase())
  );

  return (
    <Layout
      breadcrumbs={[
        { name: "Equipos", href: "/equipos" },
        { name: "Crear", href: "/equipos/crear" },
      ]}
    >
      <form
        className="flex w-full items-stretch gap-7 self-center p-4"
         onSubmit={onSubmit(handleSubmit)}
      >
        <section className="flex w-full flex-col gap-5">
          <TextInput
            label="Nombre del Equipo"
            placeholder="Boston Celtics"
            required
            {...getInputProps("name")}
          />
          <div className="flex justify-center items-center space-x-4">
            <Paper shadow="xs" p="xs" className="w-full" style={{ minHeight: "300px", minWidth: "300px" }}>
              <h2 className="text-lg font-semibold mb-4">Jugadores</h2>
              <Input
                placeholder="Buscar jugador"
                rightSection={<i className="fas fa-search"></i>}
                value={searchPlayers}
                onChange={(event) => setSearchPlayers(event.currentTarget.value)}
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
            <Paper shadow="xs" p="xs" className="w-full" style={{ minHeight: "300px", minWidth: "300px" }}>
              <h2 className="text-lg font-semibold mb-4">Equipo</h2>
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
        </section>
        <section className="grid">
          <div className="flex flex-col gap-5">
            <InputPhoto
              photoSrc={values.photoSrc}
              onClickFileButton={handleChangePhoto}
              onClickDeleteButton={handleClickDeletePhoto}
            />
            <div className="flex flex-col gap-2">
              <label className="text-gray-600">Deporte:</label>
              <a className="text-xl font-semibold">{sportFromDb?.name}</a>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoadingForm}
            className="place-self-end"
          >
            Crear Equipo
          </Button>
        </section>
      </form>
    </Layout>
  );
}
export default CreateTeam;