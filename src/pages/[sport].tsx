import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function Sport() {
  const { query, asPath } = useRouter();
  const { sport } = query;

  return (
    <>
      <Layout breadcrumbs={["basket"]}>{sport}</Layout>
    </>
  );
}
