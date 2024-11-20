import { FC } from "react";

interface props {
  onClose: () => void;
}

const AddItemButton: FC<props> = ({ onClose }) => {
  return (
    <button
      onClick={() => {
        console.log("Item added");
        onClose();
      }}
      className="px-4 py-2 bg-blood-200 hover:bg-blood-400 text-white rounded-md"
    >
      Confirm
    </button>
  );
};

export default AddItemButton;
