import { PlayableCharacter } from "../../Data/DTOs/PlayableCharacter";
import { FC } from "react";

interface props {
  characters: PlayableCharacter[];
  character: string;
  setCharacter: (value: string) => void;
}

const SelectItemComponent: FC<props> = ({
  characters,
  setCharacter,
  character,
}) => {
  return (
    <div className="pb-2">
      <label className="block text-sm font-medium mb-1">Characters</label>
      <select
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
        required
      >
        <option value="" disabled>
          Select your character
        </option>
        {characters.map((x) => (
          <option key={x.id} value={x.name}>
            {x.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItemComponent;
