import { useState } from "react";
import { ItemQueries } from "../Queries/ItemQueries";
import SearchBar from "../Components/SearchBar";
import Loading from "../Components/Loading";
import ItemCard from "../Components/Items/ItemCard";

function Weapons() {
  const {
    data: allWeapons,
    isLoading: gettingWeapons,
    isSuccess: weaponsSuccess,
  } = ItemQueries.useGetAllItemsBySlotType("weapon");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredWeapon = allWeapons?.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="bg-blood-800 min-h-screen">
      {gettingWeapons ? (
        <Loading />
      ) : weaponsSuccess ? (
        <div className="p-6 h-full flex flex-col items-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-screen-item">
            {filteredWeapon?.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                characterPage={false}
                playableCharacterId={0}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Weapons;
