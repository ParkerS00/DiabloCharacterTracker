import React, { useState } from "react";
import PlayableCharacterCard from "../Components/Classes/PlayableCharacterCard";
import Loading from "../Components/Loading";
import {
  UserAccountContext,
  UserAccountContextInterface,
} from "../Data/Context/UserAccountContext";
import { PlayableCharacterQueries } from "../Queries/PlayableCharacterQueries";
import { useAuth } from "react-oidc-context";
import AddCharacterModal from "../Components/Classes/AddCharacterModel";
import AddCharacterButton from "../Components/Classes/AddCharacterButton";

function Character() {
  const { isAuthenticated } = useAuth();
  const { usr } = React.useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: userCharacters,
    isLoading,
    isSuccess,
  } = PlayableCharacterQueries.useGetAllCharactersForUser(usr?.id ?? 0);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (!isAuthenticated) return null;

  return (
    <div className="bg-blood-800 min-h-screen">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Your Characters</h1>
        {isAuthenticated && (
          <AddCharacterButton handleOpenModal={handleOpenModal} />
        )}
      </div>

      {isLoading && <Loading />}

      {isSuccess && (
        <div className="p-6 h-full flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-screen-lg">
            {userCharacters.map((character) => (
              <PlayableCharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      )}

      {isSuccess && (!userCharacters || userCharacters.length === 0) && (
        <div className="text-white text-center text-2xl">
          No characters found. Start by creating your first character!
        </div>
      )}

      {isModalOpen && (
        <AddCharacterModal onClose={handleCloseModal} userId={usr?.id ?? 0} />
      )}
    </div>
  );
}

export default Character;
