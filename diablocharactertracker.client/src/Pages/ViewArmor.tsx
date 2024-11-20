import Loading from "../Components/Loading";
import AddItemComponent from "../Components/Items/AddItemComponenet";
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
        <Loading />
      ) : isSuccess ? (
        <AddItemComponent item={armor} />
      ) : (
        <div className="text-white text-center">No data available.</div>
      )}
    </div>
  );
};

export default ViewArmor;
