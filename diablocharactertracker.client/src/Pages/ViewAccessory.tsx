import AddItemComponent from "../Components/Items/AddItemComponenet";
import Loading from "../Components/Loading";
import { ItemQueries } from "../Queries/ItemQueries";
import { useParams } from "react-router-dom";

const ViewAccessory = () => {
  const { accessoryId } = useParams<{ accessoryId: string }>();

  const {
    data: accessory,
    isLoading,
    isSuccess,
  } = ItemQueries.useGetItemById(Number(accessoryId));

  return (
    <div className="bg-blood-800 min-h-screen">
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <AddItemComponent item={accessory} />
      ) : (
        <div className="text-white text-center">No data available.</div>
      )}
    </div>
  );
};

export default ViewAccessory;
