const PlayableCharacterKeys = {
  GetPlayableCharacterById: (characterId: number) =>
    ["PlayableCharacter", "GetPlayableCharacterById", characterId] as const,
  AddPlayableCharacter: ["PlayableCharacter", "AddPlayableCharacter"] as const,
  UpdatePlayableCharacter: [
    "PlayableCharacter",
    "UpdatePlayableCharacter",
  ] as const,
  DeletePlayableCharacter: [
    "PlayableCharacter",
    "DeletePlayableCharacter",
  ] as const,
  GetAllCharactersForUser: [
    "PlayableCharacter",
    "GetAllCharactersForUser",
  ] as const,
};

export default PlayableCharacterKeys;
