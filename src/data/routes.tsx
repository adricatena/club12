import { ReactNode } from "react";
import { IconBallBasketball, IconBallFootball } from "@tabler/icons-react";
import { MantineTheme } from "@mantine/core";

type Route = {
  path: string;
  label: string;
  icon: ReactNode;
  color: string;
};

const iconSize = 110;

export const routes = (theme: MantineTheme): Route[] => [
  {
    path: "/basket",
    label: "BASKET",
    icon: <IconBallBasketball size={iconSize} />,
    color: theme.colors.orange[7],
  },
  {
    path: "/basket-fem",
    label: "BASKET FEM",
    icon: <IconBallBasketball size={iconSize} />,
    color: theme.colors.grape[6],
  },
  {
    path: "/futbol-7",
    label: "FUTBOL 7",
    icon: <IconBallFootball size={iconSize} />,
    color: theme.colors.cyan[9],
  },
  {
    path: "/futbol-11",
    label: "FUTBOL 11",
    icon: <IconBallFootball size={iconSize} />,
    color: theme.colors.green[9],
  },
];
