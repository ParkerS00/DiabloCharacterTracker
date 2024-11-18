import { Skill } from "../Data/DTOs/skill";
import SkillCard from "./SkillCard";

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
        <div className="flex flex-col justify-center items-center h-full p-6 space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          <div className="text-white">Loading...</div>
        </div>
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
