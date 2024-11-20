import { useState } from "react";
import DisplayAllSkills from "../Components/Skills/DisplayAllSkills";
import { SkillQueries } from "../Queries/SkillQueries";
import SearchBar from "../Components/SearchBar";

const classes = [
  { name: "Rogue", key: "rogue" },
  { name: "Sorcerer", key: "sorcerer" },
  { name: "Barbarian", key: "barbarian" },
  { name: "Druid", key: "druid" },
  { name: "Necromancer", key: "necromancer" },
  { name: "Spiritborn", key: "spiritborn" },
];

function Skills() {
  const [activeClass, setActiveClass] = useState(classes[0].key);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data: skills,
    isLoading: gettingSkills,
    isSuccess,
  } = SkillQueries.useGetAllSkillsByClassName(activeClass);

  const filteredSkill = skills?.filter((skill) =>
    skill.skillName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="bg-blood-800 min-h-screen">
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
      <div className="pt-2 h-full flex flex-col items-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <DisplayAllSkills
        skills={filteredSkill ?? []}
        gettingSkills={gettingSkills}
        isSuccess={isSuccess}
      />
    </div>
  );
}

export default Skills;
