import React, { useState } from "react";
import { useAuth } from "react-oidc-context";
import { Item } from "../../Data/DTOs/Item";
import { AddModal } from "../AddModal";

interface AddButtonProps {
  item: Item;
}

const AddButton: React.FC<AddButtonProps> = ({ item }) => {
  const { isAuthenticated } = useAuth();
  // const { usr } = React.useContext(
  //   UserAccountContext
  // ) as UserAccountContextInterface;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    isAuthenticated && (
      <>
        <button
          className="px-4 py-2 bg-blood-200 hover:bg-blood-400 text-white rounded-md shadow"
          onClick={handleModal}
        >
          Add
        </button>
        {isModalOpen && <AddModal onClose={handleModal} item={item} />}
      </>
    )
  );
};

export default AddButton;
