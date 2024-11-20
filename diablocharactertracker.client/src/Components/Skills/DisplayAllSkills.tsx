import { Skill } from "../../Data/DTOs/skill";
import SkillCard from "../../Components/Skills/SkillCard";
import Loading from "../Loading";

interface DisplayAllSkillsProps {
  skills: Skill[];
  gettingSkills: boolean;
  isSuccess: boolean;
}

const DisplayAllSkills: React.FC<DisplayAllSkillsProps> = ({
  skills,
  gettingSkills,
  isSuccess,
}) => {
  return (
    <div className="h-full">
      {gettingSkills ? (
        <Loading />
      ) : isSuccess ? (
        <div className="pr-6 pl-6 pb-6 h-full flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full max-w-screen-xl">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-white text-center">No data available.</div>
      )}
    </div>
  );
};

export default DisplayAllSkills;
