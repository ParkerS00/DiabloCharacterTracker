const AffixKeys = {
  GetAllAffixes: ["Affix", "GetAllAffixes"] as const,
  GetAffixById: (affixId: number) =>
    ["Affix", "GetAffixById", affixId] as const,
  GetAffixByName: (affixName: string) =>
    ["Affix", "GetAffixByName", affixName] as const,
};

export default AffixKeys;
