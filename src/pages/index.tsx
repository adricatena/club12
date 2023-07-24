import Layout from "@/components/layout";
import { IconBallBasketball, IconBallFootball } from "@tabler/icons-react";
import style from "./index.module.css";

export default function Home() {
  return (
    <Layout showNav={false}>
      <section className={style.container}>
        <article
          className={style.basket}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconBallBasketball /> BASKET
        </article>
        <article className={style.basketFem}>
          <IconBallBasketball /> BASKET FEM
        </article>
        <article className={style.futbol7}>
          <IconBallFootball /> FUTBOL 7
        </article>
        <article className={style.futbol11}>
          <IconBallFootball /> FUTBOL 11
        </article>
      </section>
    </Layout>
  );
  // return <Layout>Home</Layout>;
}
