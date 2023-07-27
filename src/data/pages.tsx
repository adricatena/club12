import { IconShirtSport, IconStretching } from "@tabler/icons-react";
import { ReactNode } from "react";

type Page = {
  path: string;
  label: string;
  icon: ReactNode;
};

export const pages: Page[] = [
  {
    path: "/jugadores",
    label: "Jugadores",
    icon: <IconStretching />,
  },
  {
    path: "/equipos",
    label: "Equipos",
    icon: <IconShirtSport />,
  },
];
