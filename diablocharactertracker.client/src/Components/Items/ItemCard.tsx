import { Item } from "../../Data/DTOs/Item";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="bg-blood-500 rounded-md shadow-md p-4 max-w-xs text-center">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-blood-950">{item.name}</h2>
      <p className="text-blood-200">Slot: {item.slotType}</p>
    </div>
  );
};

export default ItemCard;
