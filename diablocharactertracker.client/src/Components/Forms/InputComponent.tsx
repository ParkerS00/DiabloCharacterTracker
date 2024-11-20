import { FC } from "react";

interface props {
  name: string;
  setName: (value: string) => void;
}

const InputComponent: FC<props> = ({ name, setName }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
        required
      />
    </div>
  );
};

export default InputComponent;
