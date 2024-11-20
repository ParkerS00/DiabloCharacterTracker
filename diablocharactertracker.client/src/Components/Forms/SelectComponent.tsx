import { CharacterClassQueries } from "../../Queries/CharacterClassQueries";
import { FC } from "react";

interface Props {
  characterClass: string;
  setCharacterClass: (value: string) => void;
}

const SelectComponent: FC<Props> = ({ characterClass, setCharacterClass }) => {
  const { data: allClasses } = CharacterClassQueries.useGetAllCharacterClasses();

  console.log(allClasses);

  return (
    allClasses && (
      <div>
        <label className="block text-sm font-medium mb-1">Class</label>
        <select
          value={characterClass}
          onChange={(e) => setCharacterClass(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          required
        >
          <option value="" disabled>
            Select a class
          </option>
          {allClasses.map((x) => (
            <option key={x.id} value={x.className}>
              {x.className}
            </option>
          ))}
        </select>
      </div>
    )
  );
};

export default SelectComponent;
