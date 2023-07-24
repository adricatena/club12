import { ReactNode } from "react";
import style from "./layout.module.css";
import { NavLink, Title } from "@mantine/core";
import Link from "next/link";

type Props = {
  showNav?: boolean;
  children: ReactNode;
};

export default function Layout({ showNav, children }: Props) {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <Title order={3}>Club 12</Title>
      </header>
      {!showNav ? null : (
        <nav className={style.nav}>
          <NavLink component={Link} href="/players" label="Jugadores" />
        </nav>
      )}
      <main className={style.main}>{children}</main>
    </div>
  );
}
