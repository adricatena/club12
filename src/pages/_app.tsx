import { client } from "@/database/client";
import "@/styles/globals.css";
import { Loader, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const { data } = client.auth.onAuthStateChange((_, session) => {
      const isLoginRoute = router.pathname === "/login";
      if (session && isLoginRoute) {
        router.push("/");
      } else if (!session && !isLoginRoute) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    });
    return () => data.subscription.unsubscribe();
  }, [router]);

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
        supabaseClient={client}
        initialSession={pageProps.initialSession}
      >
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {isLoading ? <Loader size="xl" /> : <Component {...pageProps} />}
          <Notifications />
        </MantineProvider>
      </SessionContextProvider>
    </>
  );
}
