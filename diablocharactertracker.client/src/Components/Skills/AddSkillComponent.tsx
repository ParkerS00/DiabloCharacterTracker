import { Skill } from "../../Data/DTOs/skill";
import { FC } from "react";

interface AddSkillComponentProps {
  skill: Skill;
}

const AddSkillComponent: FC<AddSkillComponentProps> = ({ skill }) => {
  return (
    <div className="p-6 h-full flex flex-col items-center">
      <div className="max-w-md w-full">
        <div className="bg-blood-500 rounded-md shadow-md p-4 flex flex-col items-center text-center">
          <h1 className="text-2xl font-semibold text-blood-950 mb-4">
            {skill.skillName}
          </h1>
          <img
            src={skill.imageUrl}
            alt={skill.skillName}
            className="w-full h-full object-cover rounded-md mb-4"
          />
          <p className="text-blood-200 mb-2">{`${skill.description}`}</p>
                  <p className="text-blood-200 mb-2">{`Max alloted points: ${skill.maxPointsAlloted}`}</p>
          <p
            className={`text-lg font-medium ${
              skill.isUltimate ? "text-yellow-600" : "text-blood-200"
            }`}
          >
            {skill.isUltimate ? "Ultimate" : "Normal"}
          </p>
          {/* <div className="flex justify-between mt-4 w-full">
            <AddButton item={item} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddSkillComponent;
