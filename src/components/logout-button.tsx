import { client } from "@/database/clients";
import { Button } from "@mantine/core";
import { IconDoorExit } from "@tabler/icons-react";
import { useRouter } from "next/router";

function LogoutButton() {
  const router = useRouter();

  async function handleClick() {
    await client.auth.signOut();
    router.push("/login");
  }

  return (
    <Button
      size="xs"
      color="dark"
      leftSection={<IconDoorExit size={15} />}
      className="m-2"
      onClick={handleClick}
    >
      Cerrar sesion
    </Button>
  );
}

export default LogoutButton;
