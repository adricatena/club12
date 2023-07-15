import { Grid, Heading, Icon, chakra } from "@chakra-ui/react";
import { IconPlayBasketball } from "@tabler/icons-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Grid
      height="100vh"
      templateRows="min-content auto"
      templateColumns="min-content auto"
      templateAreas={`"header header" "nav main"`}
    >
      <chakra.header
        gridArea="header"
        paddingLeft={2}
        paddingY={2}
        borderBottomWidth={1}
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
      >
        <Heading size="2xl">Club12</Heading>
      </chakra.header>
      <chakra.nav
        gridArea="nav"
        paddingX={2}
        paddingTop={2}
        borderRightWidth={1}
        borderRightStyle="solid"
        borderRightColor="gray.100"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="start"
      >
        <chakra.span display="flex" paddingY={2}>
          <Icon as={IconPlayBasketball} boxSize={5} />
          <Heading as="h4" size="sm">
            Jugadores
          </Heading>
        </chakra.span>
        <chakra.span display="flex" paddingY={2}>
          <Icon as={IconPlayBasketball} boxSize={5} />
          <Heading as="h4" size="sm">
            Jugadoressssss
          </Heading>
        </chakra.span>
      </chakra.nav>
      <chakra.main gridArea="main">{children}</chakra.main>
    </Grid>
  );
}
