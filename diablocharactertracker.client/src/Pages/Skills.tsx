import SkillCard from "../Components/SkillCard";
import { SkillQueries } from "../Queries/SkillQueries";

function Skills() {
  const {
    data: rogueSkills,
    isLoading: gettingRogue,
    isSuccess: rogueSuccess,
  } = SkillQueries.useGetAllSkillsByClassName("spiritborn");

  return (
    <div className="bg-blood-800 min-h-screen">
      {gettingRogue ? (
        <div className="flex flex-col justify-center items-center h-full p-6 space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          <div className="text-white">Loading...</div>
        </div>
      ) : rogueSuccess ? (
        <div className="p-6 h-full flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 skill:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full max-w-screen-xl">
            {rogueSkills?.map((skill) => (
              <SkillCard skill={skill} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Skills;
