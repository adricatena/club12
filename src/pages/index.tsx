import Layout from "@/components/layout";
import { IconBallBasketball, IconBallFootball } from "@tabler/icons-react";
import { createStyles } from "@mantine/core";

export default function Home() {
  const { classes } = useClasses();

  return (
    <Layout showNav={false}>
      <section className={classes.container}>
        <article className={`${classes.centerFlex} ${classes.basket}`}>
          <IconBallBasketball /> BASKET
        </article>
        <article className={`${classes.centerFlex} ${classes.basketFem}`}>
          <IconBallBasketball /> BASKET FEM
        </article>
        <article className={`${classes.centerFlex} ${classes.futbol7}`}>
          <IconBallFootball /> FUTBOL 7
        </article>
        <article className={`${classes.centerFlex} ${classes.futbol11}`}>
          <IconBallFootball /> FUTBOL 11
        </article>
      </section>
    </Layout>
  );
}

const useClasses = createStyles((theme) => ({
  container: {
    display: "grid",
    placeItems: "center",
  },
  centerFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  basket: {
    color: theme.colors.orange[7],
  },
  basketFem: {
    color: theme.colors.grape[6],
  },
  futbol7: {
    color: theme.colors.cyan[9],
  },
  futbol11: {
    color: theme.colors.green[9],
  },
}));
