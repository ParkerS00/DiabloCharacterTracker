import AddItemComponent from "../Components/AddItemComponenet";
import { ItemQueries } from "../Queries/ItemQueries";
import { useParams } from "react-router-dom";

const ViewArmor = () => {
  const { armorId } = useParams<{ armorId: string }>();

  console.log("amrorId: ", armorId);

  const {
    data: armor,
    isLoading,
    isSuccess,
  } = ItemQueries.useGetItemById(Number(armorId));

  return (
    <div className="bg-blood-800 min-h-screen">
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-full p-6 space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          <div className="text-white">Loading...</div>
        </div>
      ) : isSuccess ? (
        <AddItemComponent item={armor} />
      ) : (
        <div className="text-white text-center">No data available.</div>
      )}
    </div>
  );
};

export default ViewArmor;
