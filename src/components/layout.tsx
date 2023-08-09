import { ReactNode } from "react";
import { NavLink, Title, createStyles, px, rem } from "@mantine/core";
import Link from "next/link";
import ULink from "./unstyled-link";
import { navLinks } from "@/data/nav-links";
import LogoutButton from "./logout-button";
import { IconChevronRight } from "@tabler/icons-react";

type Props = {
  breadcrumbs?: string[];
  children: ReactNode;
};

export default function Layout({ breadcrumbs, children }: Props) {
  const { classes } = useClasses();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <span className={classes.brand}>
          <ULink href="/">
            <Title order={2}>Club 12</Title>
          </ULink>

          {breadcrumbs
            ? breadcrumbs.map((breadcrumb) => (
                <span key={breadcrumb} className={classes.breadcrums}>
                  <IconChevronRight />
                  <ULink href={`/${breadcrumb.toLowerCase()}`}>
                    <Title order={4}>{breadcrumb}</Title>
                  </ULink>
                </span>
              ))
            : null}
        </span>
        <LogoutButton />
      </header>
      <aside className={classes.aside}>
        <nav className={classes.nav}>
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.label}
              label={navLink.label}
              icon={navLink.icon}
              classNames={{
                root: classes.navLink,
                icon: classes.navLinkIcon,
              }}
            >
              {navLink.actions.map((action) => (
                <NavLink
                  key={action.label}
                  component={Link}
                  href={action.path}
                  label={action.label}
                />
              ))}
            </NavLink>
          ))}
        </nav>
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
    padding: theme.spacing.lg,
    borderBottomStyle: "solid",
    borderBottomWidth: theme.radius.xs,
    borderBottomColor: theme.colors.gray[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm,
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
  navLink: {
    padding: theme.spacing.md,
  },
  navLinkIcon: {
    marginRight: "0.4rem",
  },
  main: {
    gridArea: "main",
    margin: `${theme.spacing.xs} ${theme.spacing.sm}`,
    display: "grid",
    alignItems: "start",
    justifyItems: "center",
  },
}));
