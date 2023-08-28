import { AuthController } from "@/entities/auth/auth.controller";
import { Button } from "@mantine/core";
import { IconDoorExit } from "@tabler/icons-react";

function LogoutButton() {
  return (
    <Button
      size="xs"
      color="dark"
      leftIcon={<IconDoorExit size={15} />}
      className="m-2"
      onClick={async () => await AuthController.logout()}
    >
      Cerrar sesion
    </Button>
  );
}

export default LogoutButton;
