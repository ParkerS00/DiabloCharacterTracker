const CharacterSkillKeys = {
  AddCharacterKill: ["CharacterSkill", "AddCharacterSkill"] as const,
  GetAllSkillsForCharacter: [
    "CharacterSkill",
    "GetAllSkillsForCharacter",
  ] as const,
  RemoveCharacterSkill: (characterSkillId: number) =>
    ["CharacterSkill", "RemoveCharacterSkill", characterSkillId] as const,
  GetCharacterSkillByRequest: [
    "CharacterSkill",
    "GetCharacterSkillByRequest",
  ] as const,
};

export default CharacterSkillKeys;
