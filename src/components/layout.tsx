import { ReactNode } from "react";
import { NavLink, Title, createStyles } from "@mantine/core";
import Link from "next/link";

type Props = {
  showNav?: boolean;
  children: ReactNode;
};

export default function Layout({ showNav, children }: Props) {
  const { classes } = useClasses({ showNav });

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Title order={3}>Club 12</Title>
      </header>
      {!showNav ? null : (
        <nav className={classes.nav}>
          <NavLink component={Link} href="/players" label="Jugadores" />
        </nav>
      )}
      <main className={classes.main}>{children}</main>
    </div>
  );
}

const useClasses = createStyles(
  (theme, { showNav }: { showNav: boolean | undefined }) => ({
    container: {
      height: "100vh",
      display: "grid",
      gridTemplateRows: "min-content auto",
      gridTemplateColumns: "min-content auto",
      gridTemplateAreas: `"header header" "nav main"`,
    },
    header: {
      gridArea: "header",
      paddingLeft: theme.spacing.sm,
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderBottomStyle: "solid",
      borderBottomWidth: theme.radius.xs,
      borderBottomColor: theme.colors.gray[0],
    },
    nav: {
      gridArea: "nav",
      borderRightStyle: "solid",
      borderRightWidth: theme.radius.xs,
      borderRightColor: theme.colors.gray[0],
    },
    main: {
      gridArea: "main",
      marginTop: theme.spacing.xs,
      marginLeft: showNav ? theme.spacing.sm : 0,
    },
  })
);
