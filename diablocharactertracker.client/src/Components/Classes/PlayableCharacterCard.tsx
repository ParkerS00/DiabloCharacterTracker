import { Link } from "react-router-dom";
import { PlayableCharacter } from "../../Data/DTOs/PlayableCharacter";
import React from "react";

interface PlayableCharacterCardProps {
  character: PlayableCharacter;
}

const PlayableCharacterCard: React.FC<PlayableCharacterCardProps> = ({
  character,
}) => {
  return (
    <Link
      to={`/viewcharacter/${character.id}`}
      className="bg-blood-700 p-4 rounded-lg shadow-md text-white max-w-xs space-y-4"
    >
      <div className="flex justify-between items-start">
        <img
          src={character.characterClass.imageUrl}
          alt={`${character.characterClass.className} image`}
          className="w-20 h-20 object-cover rounded-md"
        />

        <h2 className="text-2xl font-bold">{character.name}</h2>
      </div>

      <div className="text-lg">
        <span className="font-semibold">Class:</span>{" "}
        {character.characterClass.className}
      </div>

      <p className="text-gray-300">{character.characterClass.description}</p>
    </Link>
  );
};

export default PlayableCharacterCard;
