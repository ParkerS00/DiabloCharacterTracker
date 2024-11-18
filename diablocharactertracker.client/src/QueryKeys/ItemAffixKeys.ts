const ItemAffixKeys = {
  GetAllAffixesByItem: ["ItemAffix", "GetAllAffixesByItem"] as const,
  GetAllItemsByAffix: ["ItemAffix", "GetAllItemsByAffix"] as const,
  GetItemAffixById: (itemAffixId: number) =>
    ["ItemAffix", "GetItemAffixById", itemAffixId] as const,
  AddItemAffix: ["ItemAffix", "AddItemAffix"] as const,
};

export default ItemAffixKeys;
