import { Skill } from "../Data/DTOs/skill";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex bg-blood-500 rounded-lg p-2 w-full max-w-xl">
      <div className="mr-1 lg:mr-4">
        <img
          src={skill.imageUrl}
          alt={skill.skillName}
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 relative items-end mr-1">
        <h3 className="md:text-base text-xl font-bold text-right w-full">
          {skill.skillName}
        </h3>
        <div className="flex space-x-2 mb-4">
          <span
            className={`py-1 px-2 text-sm rounded-full absolute right-0 bottom-0 ${
              skill.isUltimate ? "bg-blood-100 text-blood-700" : "bg-blood-400"
            }`}
          >
            {skill.isUltimate ? "Ultimate" : "Regular"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
