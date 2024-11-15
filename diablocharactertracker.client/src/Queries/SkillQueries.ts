import { SkillService } from "../ApiServices/SkillService";
import { useQuery } from "@tanstack/react-query";
import keys from "../QueryKeys/SkillKeys";

export const SkillQueries = {
  useGetAllSkills: () => {
    return useQuery({
      queryFn: () => SkillService.GetAllSkills(),
      queryKey: keys.GetAllSkills,
    });
  },
  useGetSkillById: (skillId: number) => {
    return useQuery({
      queryFn: () => SkillService.GetSkillById(skillId),
      queryKey: keys.GetSkillById(skillId),
    });
  },
  useGetSkillByName: (skillName: string) => {
    return useQuery({
      queryFn: () => SkillService.GetSkillByName(skillName),
      queryKey: keys.GetSkillByName(skillName),
    });
  },
  useGetAllSkillsByClassName: (className: string) => {
    return useQuery({
      queryFn: () => SkillService.GetAllSkillsByClassName(className),
      queryKey: keys.GetAllSkillsByClassName(className),
    });
  },
};
