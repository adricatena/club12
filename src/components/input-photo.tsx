import { Avatar, Button, FileButton, createStyles } from "@mantine/core";

interface InputPhotoProps {
  photoSrc: string | "";
  onClickFileButton: (file: File | null) => void;
  onClickDeleteButton: () => void;
}

function InputPhoto({
  photoSrc,
  onClickFileButton,
  onClickDeleteButton,
}: InputPhotoProps) {
  const { classes } = useClasses();

  return (
    <div className={classes.container}>
      <Avatar radius="xs" size="xl" src={photoSrc} />
      <span className={classes.buttons}>
        <FileButton accept="image/*" onChange={onClickFileButton}>
          {(props) => (
            <Button {...props} size="xs">
              Seleccionar archivo
            </Button>
          )}
        </FileButton>
        <Button color="gray" size="xs" fullWidth onClick={onClickDeleteButton}>
          Eliminar archivo
        </Button>
      </span>
    </div>
  );
}

const useClasses = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: theme.spacing.md,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing.sm,
  },
}));

export default InputPhoto;
