import { useAuth } from "react-oidc-context";

const RemoveButton = () => {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated && (
      <button className="px-4 py-2 bg-blood-600 hover:bg-blood-800 text-white rounded-md shadow">
        Remove
      </button>
    )
  );
};

export default RemoveButton;
