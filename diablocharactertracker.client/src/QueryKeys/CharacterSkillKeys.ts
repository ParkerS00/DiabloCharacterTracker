const CharacterSkillKeys = {
  AddCharacterKill: ["CharacterSkill", "AddCharacterSkill"] as const,
  GetAllSkillsForCharacter: (characterId: number) =>
    ["CharacterSkill", "GetAllSkillsForCharacter", characterId] as const,
  RemoveCharacterSkill: (characterSkillId: number) =>
    ["CharacterSkill", "RemoveCharacterSkill", characterSkillId] as const,
};

export default CharacterSkillKeys;
