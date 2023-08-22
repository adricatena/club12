import { useSupabase } from "@/hooks/use-supabase";
import { Button } from "@mantine/core";
import { IconDoorExit } from "@tabler/icons-react";
import { useRouter } from "next/router";

function LogoutButton() {
  const { auth } = useSupabase();
  const router = useRouter();

  async function handleClick() {
    await auth.signOut();
    router.replace("/login");
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
