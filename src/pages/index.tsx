import Layout from "@/components/layout";
import { createStyles } from "@mantine/core";
import { routes } from "@/data/routes";
import Link from "next/link";

export default function Home() {
  const { classes, theme } = useClasses();

  return (
    <Layout showNav={false}>
      <section className={classes.container}>
        {routes(theme).map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={classes.sport}
            style={{ color: route.color }}
          >
            {route.icon} {route.label}
          </Link>
        ))}
      </section>
    </Layout>
  );
}

const useClasses = createStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  sport: {
    display: "grid",
    placeItems: "center",
    textDecoration: "none",
  },
}));
