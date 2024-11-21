import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { SkillQueries } from "../Queries/SkillQueries";
import AddSkillComponent from "../Components/Skills/AddSkillComponent";

function ViewSkill() {
  const { skillId } = useParams<{ skillId: string }>();

  const {
    data: skill,
    isLoading,
    isSuccess,
  } = SkillQueries.useGetSkillById(Number(skillId));

  return (
    <div className="bg-blood-800 min-h-screen">
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <AddSkillComponent skill={skill} />
      ) : (
        <div className="text-white text-center">No data available.</div>
      )}
    </div>
  );
}

export default ViewSkill;
