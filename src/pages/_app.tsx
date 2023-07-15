import { useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Database } from "@/lib/supabase/types";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createPagesBrowserClient<Database>());

  return (
    <>
      <Head>
        <title>Club12</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
          <Notifications />
        </MantineProvider>
      </SessionContextProvider>
    </>
  );
}
