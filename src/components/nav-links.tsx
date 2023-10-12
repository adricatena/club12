import { IconShirtSport, IconStretching } from "@tabler/icons-react";
import { ReactNode } from "react";

type ActionLink = {
  path: string;
  label: string;
};

type NavLink = {
  label: string;
  icon: ReactNode;
  actions: ActionLink[];
};

export const navLinks: NavLink[] = [
  {
    label: "Jugadores",
    icon: <IconStretching />,
    actions: [
      {
        path: "/jugadores/crear",
        label: "Crear jugador",
      },
      {
        path: "/jugadores",
        label: "Buscar jugador",
      },
    ],
  },
  {
    label: "Equipos",
    icon: <IconShirtSport />,
    actions: [
      {
        path: "/equipos/crear",
        label: "Crear equipo",
      },
      {
        path: "/equipos",
        label: "Buscar equipo",
      },
    ],
  },
];
