import { ReactNode } from "react";
import { NavLink, Title, createStyles } from "@mantine/core";
import Link from "next/link";
import ULink from "./unstyled-link";

type Props = {
  breadcrumbs?: string[];
  showNav?: boolean;
  children: ReactNode;
};

export default function Layout({
  breadcrumbs = [""],
  showNav = true,
  children,
}: Props) {
  const { classes } = useClasses();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <ULink href="/">
          <Title order={2}>Club 12</Title>
        </ULink>

        {breadcrumbs.map((breadcrumb) => (
          <span key={breadcrumb} className={classes.breadcrums}>
            <Title order={3}>/</Title>
            <ULink href={`/${breadcrumb}`}>
              <Title order={3}>{breadcrumb}</Title>
            </ULink>
          </span>
        ))}
      </header>
      {showNav ? (
        <nav className={classes.nav}>
          <NavLink component={Link} href="/players" label="Jugadores" />
        </nav>
      ) : null}
      <main className={`${classes.main} ${showNav ? classes.mainWithNav : ""}`}>
        {children}
      </main>
    </div>
  );
}

const useClasses = createStyles((theme) => ({
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
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  breadcrums: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.xs,
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
  },
  mainWithNav: {
    marginLeft: theme.spacing.sm,
  },
}));
