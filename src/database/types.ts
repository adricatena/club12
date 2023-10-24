export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      players: {
        Row: {
          active: boolean
          birthdate: string
          cellphone: string | null
          created_at: string | null
          dni: number
          email: string | null
          id: string
          lastname: string
          name: string
          observations: string | null
        }
        Insert: {
          active?: boolean
          birthdate: string
          cellphone?: string | null
          created_at?: string | null
          dni: number
          email?: string | null
          id?: string
          lastname: string
          name: string
          observations?: string | null
        }
        Update: {
          active?: boolean
          birthdate?: string
          cellphone?: string | null
          created_at?: string | null
          dni?: number
          email?: string | null
          id?: string
          lastname?: string
          name?: string
          observations?: string | null
        }
        Relationships: []
      }
      players_sports: {
        Row: {
          created_at: string | null
          federated: boolean
          player_id: string
          sport_id: string
        }
        Insert: {
          created_at?: string | null
          federated?: boolean
          player_id: string
          sport_id: string
        }
        Update: {
          created_at?: string | null
          federated?: boolean
          player_id?: string
          sport_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "players_sports_player_id_fkey"
            columns: ["player_id"]
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_sports_sport_id_fkey"
            columns: ["sport_id"]
            referencedRelation: "sports"
            referencedColumns: ["id"]
          }
        ]
      }
      players_teams: {
        Row: {
          created_at: string | null
          player_id: string
          team_id: string
        }
        Insert: {
          created_at?: string | null
          player_id: string
          team_id: string
        }
        Update: {
          created_at?: string | null
          player_id?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "players_teams_player_id_fkey"
            columns: ["player_id"]
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_teams_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["id"]
          }
        ]
      }
      sports: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      teams: {
        Row: {
          active: boolean
          created_at: string | null
          id: string
          name: string
          sport_id: string
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          id?: string
          name: string
          sport_id: string
        }
        Update: {
          active?: boolean
          created_at?: string | null
          id?: string
          name?: string
          sport_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teams_sport_id_fkey"
            columns: ["sport_id"]
            referencedRelation: "sports"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
