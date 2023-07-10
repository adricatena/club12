import { Grid, Heading, Icon, chakra } from "@chakra-ui/react";
import { IconPlayBasketball } from "@tabler/icons-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Grid
      templateRows="50px auto"
      templateColumns="200px auto"
      templateAreas={`"header header" "nav main"`}
    >
      <chakra.header gridArea="header">
        <Heading>Club12</Heading>
      </chakra.header>
      <chakra.nav gridArea="nav">
        <chakra.span sx={{ display: "flex" }}>
          <Icon as={IconPlayBasketball} boxSize={5} />
          <Heading as="h4" size="sm">
            Jugadores
          </Heading>
        </chakra.span>
      </chakra.nav>
      <chakra.main gridArea="main">{children}</chakra.main>
    </Grid>
  );
}
