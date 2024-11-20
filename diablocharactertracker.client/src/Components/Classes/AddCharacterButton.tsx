import { FC } from "react";

interface Props {
  handleOpenModal: () => void;
}

const AddCharacterButton: FC<Props> = ({ handleOpenModal }) => {
  return (
    <button
      className="bg-blood-500 text-white px-4 py-2 rounded hover:bg-blood-600"
      onClick={handleOpenModal}
    >
      Add New Character
    </button>
  );
};

export default AddCharacterButton;
