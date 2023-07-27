import Layout from "@/components/layout";
import { createStyles } from "@mantine/core";

export default function Home() {
  const { classes, theme } = useClasses();

  return <Layout>Home</Layout>;
}

const useClasses = createStyles((theme) => ({}));
