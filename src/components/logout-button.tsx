import { AuthController } from "@/entities/auth/auth.controller";
import { Button } from "@mantine/core";
import { IconDoorExit } from "@tabler/icons-react";
import { useRouter } from "next/router";

function LogoutButton() {
  const router = useRouter();

  async function handleClick() {
    await AuthController.logout();
    router.push("/login");
  }

  return (
    <Button
      size="xs"
      color="dark"
      leftIcon={<IconDoorExit size={15} />}
      className="m-2"
      onClick={handleClick}
    >
      Cerrar sesion
    </Button>
  );
}

export default LogoutButton;
