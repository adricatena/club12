export interface Player {
  name: string;
  lastname: string;
  dni: number;
  birthdate: string;
  email?: string;
  cellphone?: string;
}

export type PlayerSport = {
  player_id: string;
  sport_id: string;
  federated: boolean;
};
