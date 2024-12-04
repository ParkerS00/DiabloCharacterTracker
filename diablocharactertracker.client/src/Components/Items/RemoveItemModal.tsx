import { GetCharacterItemRequest } from "../../Data/Requests/GetRequests/GetCharacterItemRequest";
import { Item } from "../../Data/DTOs/Item";
import { CharacterItemQueries } from "../../Queries/CharacterItemQueries";
import CancelItemButton from "./CancelItemButton";
import toast from "react-hot-toast";

interface RemoveModalProps {
  onClose: () => void;
  item: Item;
  playableCharacterId: number;
}

export const RemoveItemModal: React.FC<RemoveModalProps> = ({
  onClose,
  item,
  playableCharacterId,
}) => {
  const getCharacterItemRequest: GetCharacterItemRequest = {
    itemId: item.id,
    playableCharacterId: playableCharacterId,
  };

  const { data: itemToDelete } =
    CharacterItemQueries.useGetCharacterItemByRequest(getCharacterItemRequest);

  const { mutate: deleteCharacterItem } =
    CharacterItemQueries.useDeleteCharacterItem(itemToDelete?.id ?? 0);

  const handleDelete = () => {
    deleteCharacterItem(undefined, {
      onSuccess: (isDeleted) => {
        if (isDeleted) {
          toast.success("Item Removed Successfully");
          onClose();
        } else {
          toast.error("Item Already Removed");
        }
      },
      onError: () => {
        toast.error("Failed To Remove Item");
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-blood-950 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blood-500 p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Remove {item.name}?
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
