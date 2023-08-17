import { Avatar, Button, FileButton } from "@mantine/core";

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
  return (
    <div className="flex items-end justify-start gap-4">
      <Avatar radius="xs" size="xl" src={photoSrc} />
      <span className="flex flex-col items-start justify-start gap-3">
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

export default InputPhoto;
