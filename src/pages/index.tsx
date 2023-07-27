import Layout from "@/components/layout";
import { createStyles } from "@mantine/core";
import { sports } from "@/data/sports";
import Link from "next/link";

export default function Home() {
  const { classes, theme } = useClasses();

  return (
    <Layout showNav={false}>
      <section className={classes.container}>
        {sports(theme).map((sport) => (
          <Link
            key={sport.path}
            href={sport.path}
            className={classes.sport}
            style={{ color: sport.color }}
          >
            {sport.icon} {sport.label}
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
