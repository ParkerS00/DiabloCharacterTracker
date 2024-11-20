import { Item } from "../../Data/DTOs/Item";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";

interface AddItemComponentProps {
  item: Item;
}

const AddItemComponent: React.FC<AddItemComponentProps> = ({ item }) => {
  return (
    <div className="p-6 h-full flex flex-col items-center">
      <div className="max-w-md w-full">
        <div className="bg-blood-500 rounded-md shadow-md p-4 flex flex-col items-center text-center">
          <h1 className="text-2xl font-semibold text-blood-950 mb-4">
            {item.name}
          </h1>
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover rounded-md mb-4"
          />
          <p className="text-blood-200 mb-2">{`Slot Type: ${item.slotType}`}</p>
          <p className="text-blood-200 mb-2">{`Slot: ${item.slot}`}</p>
          <p
            className={`text-lg font-medium ${
              item.isMythic ? "text-yellow-600" : "text-blood-200"
            }`}
          >
            {item.isMythic ? "Mythic" : "Normal"}
          </p>
          <div className="flex justify-between mt-4 w-full">
            <AddButton item={item} />
            <RemoveButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemComponent;
