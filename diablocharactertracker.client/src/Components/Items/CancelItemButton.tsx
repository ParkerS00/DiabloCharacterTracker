import { FC } from "react";

interface props {
  onClose: () => void;
}

const CancelItemButton: FC<props> = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
    >
      Cancel
    </button>
  );
};

export default CancelItemButton;
