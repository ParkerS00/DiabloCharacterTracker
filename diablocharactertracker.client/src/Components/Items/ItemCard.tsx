import { Link } from "react-router-dom";
import { Item } from "../../Data/DTOs/Item";
import RemoveButton from "../Buttons/RemoveButton";

interface ItemCardProps {
  item: Item;
  characterPage: boolean;
  playableCharacterId: number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  characterPage,
  playableCharacterId,
}) => {
  return (
    <div className="bg-blood-500 rounded-md shadow-md p-4 max-w-xs text-center hover:shadow-blood-100">
      <Link to={`/${item.slot}/${item.id}`} className="">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl md:text-lg font-semibold text-blood-950">
          {item.name}
        </h2>
        <p className="text-blood-200">Slot: {item.slotType}</p>
      </Link>
      <div>
        {characterPage && (
          <RemoveButton item={item} playableCharacterId={playableCharacterId} />
        )}
      </div>
    </div>
  );
};

export default ItemCard;
