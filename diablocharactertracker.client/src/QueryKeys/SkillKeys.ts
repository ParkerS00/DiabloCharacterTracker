const SkillKeys = {
  GetAllSkills: ["Skill", "GetAllSkills"] as const,
  GetSkillById: (skillId: number) =>
    ["Skill", "GetSkillById", skillId] as const,
  GetSkillByName: (skillName: string) =>
    ["Skill", "GetSkillByName", skillName] as const,
  GetAllSkillsByClassName: (className: string) =>
    ["Skill", "GetAllSkillsByClassName", className] as const,
};

export default SkillKeys;
