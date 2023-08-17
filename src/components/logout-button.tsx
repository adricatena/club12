import { useSupabase } from "@/lib/supabase/clients";
import { Button } from "@mantine/core";
import { IconDoorExit } from "@tabler/icons-react";
import { useRouter } from "next/router";

function LogoutButton() {
  const supabase = useSupabase();
  const router = useRouter();

  async function handleClick() {
    await supabase.auth.signOut();
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
