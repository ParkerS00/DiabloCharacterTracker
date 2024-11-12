import ItemCard from "../Components/AllItemCard";
import { ItemQueries } from "../Queries/ItemQueries";

function Armor() {
  const { data: allArmor } = ItemQueries.useGetAllItemsBySlotType("armor");

  return (
    <div className="p-6 bg-blood-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {allArmor?.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            slotType={item.slotType}
            imageUrl={item.imageUrl}
            id={item.id}
            slot={item.slot}
            isMythic={item.isMythic}
          />
        ))}
      </div>
    </div>
  );
}

export default Armor;
