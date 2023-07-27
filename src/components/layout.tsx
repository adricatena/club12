import { ReactNode } from "react";
import { NavLink, Title, createStyles, px, rem } from "@mantine/core";
import Link from "next/link";
import ULink from "./unstyled-link";
import { pages } from "@/data/pages";
import LogoutButton from "./logout-button";

type Props = {
  breadcrumbs?: string[];
  children: ReactNode;
};

export default function Layout({ breadcrumbs, children }: Props) {
  const { classes } = useClasses();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <ULink href="/">
          <Title order={2}>Club 12</Title>
        </ULink>

        {breadcrumbs
          ? breadcrumbs.map((breadcrumb) => (
              <span key={breadcrumb} className={classes.breadcrums}>
                <Title order={3}>/</Title>
                <ULink href={`/${breadcrumb.toLowerCase()}`}>
                  <Title order={3}>{breadcrumb}</Title>
                </ULink>
              </span>
            ))
          : null}
      </header>
      <aside className={classes.aside}>
        <nav className={classes.nav}>
          {pages.map((page) => (
            <NavLink
              key={page.label}
              component={Link}
              href={page.path}
              label={page.label}
              icon={page.icon}
              classNames={{
                icon: classes.navLinkIcon,
              }}
            />
          ))}
        </nav>
        <LogoutButton />
      </aside>
      <main className={classes.main}>{children}</main>
    </div>
  );
}

const useClasses = createStyles((theme) => ({
  container: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "min-content auto",
    gridTemplateColumns: "min-content auto",
    gridTemplateAreas: `"header header" "aside main"`,
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
  aside: {
    gridArea: "aside",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRightStyle: "solid",
    borderRightWidth: theme.radius.xs,
    borderRightColor: theme.colors.gray[0],
  },
  nav: {
    width: "100%",
  },
  navLinkIcon: {
    marginRight: "0.4rem",
  },
  main: {
    gridArea: "main",
    margin: `${theme.spacing.xs} ${theme.spacing.sm}`,
  },
}));
