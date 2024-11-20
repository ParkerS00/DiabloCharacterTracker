import { FC } from "react";

interface props {
  onClose: () => void;
}

const CancelCharacterButton: FC<props> = ({ onClose }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
    >
      Cancel
    </button>
  );
};

export default CancelCharacterButton;
