import { FC } from "react";
import CancelItemButton from "../Items/CancelItemButton";
import { PlayableCharacterQueries } from "../../Queries/PlayableCharacterQueries";
import toast from "react-hot-toast";

interface RemoveCharacterModalProps {
  onClose: () => void;
  playableCharacterId: number;
  playableCharacterName: string;
}

export const RemoveCharacterModal: FC<RemoveCharacterModalProps> = ({
  onClose,
  playableCharacterId,
  playableCharacterName,
}) => {
  const { mutate: removeCharacter } =
    PlayableCharacterQueries.useDeletePlayableCharacter(playableCharacterId);

  const handleDelete = () => {
    removeCharacter(undefined, {
      onSuccess: (isDeleted) => {
        if (isDeleted) {
          toast.success("Character Removed Successfully");
          onClose();
        } else {
          toast.error("Character Already Removed");
        }
      },
      onError: () => {
        toast.error("Failed To Remove Character");
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-blood-950 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blood-500 p-6 rounded-md shadow-md w-fit">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Remove {playableCharacterName}?
        </h2>
        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-blood-200 hover:bg-blood-400 text-white rounded-md shadow"
            onClick={handleDelete}
          >
            Yes
          </button>
          <CancelItemButton onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
