import { useState } from "react";
import DisplayAllSkills from "../Components/Skills/DisplayAllSkills";
import { SkillQueries } from "../Queries/SkillQueries";
import SearchBar from "../Components/SearchBar";
import { FilterComponent } from "../Components/Forms/FilterComponent";
import { skillCharacterClasses } from "../Components/Skills/skillCharacterClasses";
import Loading from "../Components/Loading";

function Skills() {
  const [activeClass, setActiveClass] = useState(skillCharacterClasses[0].key);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data: skills,
    isLoading: gettingSkills,
    isSuccess,
  } = SkillQueries.useGetAllSkillsByClassName(activeClass);

  const filteredSkill = skills?.filter((skill) =>
    skill.skillName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  if (gettingSkills) {
    return <Loading />
  }

  return (
    <div className="bg-blood-800 min-h-screen">
      <FilterComponent
        classes={skillCharacterClasses}
        activeClass={activeClass}
        setActiveClass={setActiveClass}
      />
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
