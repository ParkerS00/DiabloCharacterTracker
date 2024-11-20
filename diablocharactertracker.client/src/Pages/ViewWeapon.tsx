import Loading from "../Components/Loading";
import { ItemQueries } from "../Queries/ItemQueries";
import { useParams } from "react-router-dom";
import AddItemComponent from "../Components/Items/AddItemComponenet";

const ViewWeapon = () => {
  const { weaponId } = useParams<{ weaponId: string }>();

  const {
    data: weapon,
    isLoading,
    isSuccess,
  } = ItemQueries.useGetItemById(Number(weaponId));

  return (
    <div className="bg-blood-800 min-h-screen">
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <AddItemComponent item={weapon} />
      ) : (
        <div className="text-white text-center">No data available.</div>
      )}
    </div>
  );
};

export default ViewWeapon;
