import { PlayableCharacterQueries } from "../../Queries/PlayableCharacterQueries";
import { Item } from "../../Data/DTOs/Item";
import AddItemButton from "./AddItemButton";
import CancelItemButton from "./CancelItemButton";
import SelectItemComponent from "./SelectItemComponent";
import { useState } from "react";

interface AddModalProps {
  onClose: () => void;
  item: Item;
  userId: number;
}

export const AddItemModal: React.FC<AddModalProps> = ({
  onClose,
  item,
  userId,
}) => {
  const [character, setCharacter] = useState("");

  const { data: characters } =
    PlayableCharacterQueries.useGetAllCharactersForUser(userId);

  return (
    <div className="fixed inset-0 bg-blood-950 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blood-500 p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Add {item.name}
        </h2>
        <p className="mb-4 text-white">
          Select which character you want to add to:
        </p>
        <SelectItemComponent
          characters={characters ?? []}
          character={character}
          setCharacter={setCharacter}
        />
        <div className="flex justify-end gap-4">
          <CancelItemButton onClose={onClose} />
          <AddItemButton onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
