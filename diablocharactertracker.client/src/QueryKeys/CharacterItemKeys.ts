const CharacterItemKeys = {
  GetAllItemsForCharacter: [
    "CharacterItem",
    "GetAllItemsForCharacter",
  ] as const,
  GetCharacterItemById: (characterItemId: number) =>
    ["CharacterItem", "GetCharacterItemById", characterItemId] as const,
  AddCharacterItem: ["CharacterItem", "AddCharacterItem"] as const,
  DeleteCharacterItem: ["CharacterItem", "DeleteCharacterItem"] as const,
  GetCharacterItemByRequest: [
    "CharacterItem",
    "GetCharacterGetItemByRequest",
  ] as const,
};

export default CharacterItemKeys;
