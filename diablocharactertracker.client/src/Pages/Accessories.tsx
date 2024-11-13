import { useState } from "react";
import ItemCard from "../Components/AllItemCard";
import { ItemQueries } from "../Queries/ItemQueries";
import SearchBar from "../Components/SearchBar";

function Accessories() {
  const {
    data: allAccessories,
    isLoading: gettingAccessories,
    isSuccess: accessoriesSuccess,
  } = ItemQueries.useGetAllItemsBySlotType("accessory");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredAccessory = allAccessories?.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="bg-blood-800 min-h-screen">
      {gettingAccessories ? (
        <div className="flex flex-col justify-center items-center h-full p-6 space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          <div className="text-white">Loading...</div>
        </div>
      ) : accessoriesSuccess ? (
        <div className="p-6 h-full flex flex-col items-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-screen-lg">
            {filteredAccessory?.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Accessories;
