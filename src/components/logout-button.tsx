import { Button, createStyles } from "@mantine/core";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { IconDoorExit } from "@tabler/icons-react";
import { useRouter } from "next/router";

function LogoutButton() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const { classes } = useClasses();

  async function handleClick() {
    await supabase.auth.signOut();
    router.replace("/login");
  }
  return (
    <Button
      size="xs"
      color="dark"
      leftIcon={<IconDoorExit size={15} />}
      className={classes.button}
      onClick={handleClick}
    >
      Cerrar sesion
    </Button>
  );
}

const useClasses = createStyles((theme) => ({
  button: {
    margin: theme.spacing.xs,
  },
}));

export default LogoutButton;
