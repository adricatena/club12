import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const toast = {
  error: (title: string, message: string) =>
    notifications.show({
      title,
      message,
      icon: <IconX />,
      color: "red",
    }),
  success: (title: string, message: string) => {
    notifications.show({
      title,
      message,
      color: "green",
      icon: <IconCheck />,
    });
  },
};

export default toast;
