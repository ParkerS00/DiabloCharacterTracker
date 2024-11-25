import { useState } from "react";
import ItemCard from "../Components/Items/ItemCard";
import { ItemQueries } from "../Queries/ItemQueries";
import SearchBar from "../Components/SearchBar";
import Loading from "../Components/Loading";

function Armor() {
  const {
    data: allArmor,
    isLoading: gettingArmor,
    isSuccess: armorSuccess,
  } = ItemQueries.useGetAllItemsBySlotType("armor");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredArmor = allArmor?.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="bg-blood-800 min-h-screen">
      {gettingArmor ? (
        <Loading />
      ) : armorSuccess ? (
        <div className="p-6 h-full flex flex-col items-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-screen-item">
            {filteredArmor?.map((item) => (
                <ItemCard key={item.id} item={item} characterPage={false} playableCharacterId={0} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Armor;
