const CharacterClassKeys = {
  GetAllCharacterClasses: ["CharacterClass", "GetAllCharacterClasses"] as const,
  GetCharacterClassById: (characterClassId: number) =>
    ["CharacterClass", "GetCharacterClassById", characterClassId] as const,
  GetCharacterClassByName: (characterClassName: string) =>
    ["CharacterClass", "GetCharacterClassByName", characterClassName] as const,
};

export default CharacterClassKeys;
