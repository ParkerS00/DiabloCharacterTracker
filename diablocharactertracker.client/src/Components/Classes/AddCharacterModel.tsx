import React, { useState } from "react";
import InputComponent from "../Forms/InputComponent";
import SelectComponent from "../Forms/SelectComponent";
import CancelCharacterButton from "./CancelCharacterButton";
import { AddPlayableCharacterRequest } from "../../Data/Requests/AddRequests/AddPlayableCharacterRequest";
import { CharacterClassQueries } from "../../Queries/CharacterClassQueries";
import { PlayableCharacterQueries } from "../../Queries/PlayableCharacterQueries";

interface AddCharacterModalProps {
  onClose: () => void;
  userId: number;
}

const AddCharacterModal: React.FC<AddCharacterModalProps> = ({
  onClose,
  userId,
}) => {
  const [name, setName] = useState("");
  const [characterClass, setCharacterClass] = useState("");

  const { data: selectedClass } =
    CharacterClassQueries.useGetCharacterClassByName(characterClass);

  const addPlayableCharacterRequest: AddPlayableCharacterRequest = {
    classId: selectedClass?.id ?? 0,
    name: name,
    userAccountId: userId,
  };

  const { mutate: AddPlayableCharacter } =
    PlayableCharacterQueries.useAddPlayableCharacter(
      addPlayableCharacterRequest
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AddPlayableCharacter();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blood-700 p-6 rounded-lg shadow-lg text-white w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Character</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputComponent name={name} setName={setName} />
          <SelectComponent
            characterClass={characterClass}
            setCharacterClass={setCharacterClass}
          />
          <div className="flex justify-end space-x-4">
            <CancelCharacterButton onClose={onClose} />
            <button
              type="submit"
              className="bg-blood-500 text-white px-4 py-2 rounded hover:bg-blood-600"
            >
              Add Character
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCharacterModal;
