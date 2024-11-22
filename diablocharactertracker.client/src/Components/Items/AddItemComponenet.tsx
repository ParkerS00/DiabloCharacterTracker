import { ItemAffixQueries } from "../../Queries/ItemAffixQueries";
import { Item } from "../../Data/DTOs/Item";
import AddButton from "../Buttons/AddButton";

interface AddItemComponentProps {
  item: Item;
}

const AddItemComponent: React.FC<AddItemComponentProps> = ({ item }) => {
  const { data: itemAffixes } = ItemAffixQueries.useGetAllAffixesByItem(
    item.id
  );

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
            className="w-full max-h-72 object-cover rounded-md mb-4"
          />
          {itemAffixes?.map((itemAffix) => (
            <p className="text-blood-200 mb-2" key={itemAffix.id}>
              {itemAffix.name}
            </p>
          ))}
          <p className="text-blood-200 mb-2">{`Slot Type: ${item.slotType}`}</p>
          <p className="text-blood-200 mb-2">{`Slot: ${item.slot}`}</p>
          <p
            className={`text-lg font-medium ${
              item.isMythic ? "text-yellow-600 font-bold" : "text-blood-200"
            }`}
          >
            {item.isMythic ? "Mythic" : "Normal"}
          </p>
          <div className="flex justify-between mt-4 w-full">
            <AddButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemComponent;
