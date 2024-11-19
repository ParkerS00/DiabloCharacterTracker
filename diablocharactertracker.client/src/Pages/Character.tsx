import {
  UserAccountContext,
  UserAccountContextInterface,
} from "../Data/Context/UserAccountContext";
import { PlayableCharacterQueries } from "../Queries/PlayableCharacterQueries";
import React from "react";
import { useAuth } from "react-oidc-context";

function Character() {
  const { isAuthenticated } = useAuth();
  const { usr } = React.useContext(
    UserAccountContext
    ) as UserAccountContextInterface;
    
    console.log(usr)

  const {
    data: userCharacters,
    isLoading,
    isError,
    isSuccess,
  } = PlayableCharacterQueries.useGetAllCharactersForUser(usr?.id ?? 0);

  if (!isAuthenticated) return null;

  return (
    <div className="bg-blood-800 min-h-screen">
      {isLoading && (
        <div className="flex flex-col justify-center items-center h-full p-6 space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          <div className="text-white">Loading...</div>
        </div>
      )}
      {isError && (
        <div className="text-white text-center">
          Failed to load characters. Please try again later.
        </div>
      )}
      {isSuccess && userCharacters?.length > 0 && (
        <div className="p-4 space-y-4">
          {userCharacters.map((character) => (
            <div key={character.id} className="text-white">
              {character.name}
            </div>
          ))}
        </div>
      )}
      {isSuccess && (!userCharacters || userCharacters.length === 0) && (
        <div className="text-white text-center">
          No characters found. Start by creating your first character!
        </div>
      )}
    </div>
  );
}

export default Character;
