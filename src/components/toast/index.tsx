import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

const toast = {
  error: (title: string, message: string) =>
    notifications.show({
      title,
      message,
      icon: <IconX />,
      color: "red",
    }),
};

export default toast;
