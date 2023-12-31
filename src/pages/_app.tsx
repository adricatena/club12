import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.layer.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Club12</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider>
        <ModalsProvider labels={{ confirm: "Confirmar", cancel: "Cancelar" }}>
          <Component {...pageProps} />
          <Notifications />
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
