import { FC } from "react";

interface props {
  classes: { name: string; key: string }[];
  activeClass: string;
  setActiveClass: (value: React.SetStateAction<string>) => void;
}

export const FilterComponent: FC<props> = ({
  classes,
  activeClass,
  setActiveClass,
}) => {
  return (
    <div className="flex justify-center space-x-4 py-4 bg-blood-900 text-white flex-wrap gap-2">
      {classes.map((classItem) => (
        <button
          key={classItem.key}
          className={`px-4 py-2 rounded ${
            activeClass === classItem.key
              ? "bg-blood-400"
              : "bg-blood-700 hover:bg-blood-600"
          }`}
          onClick={() => setActiveClass(classItem.key)}
        >
          {classItem.name}
        </button>
      ))}
    </div>
  );
};
