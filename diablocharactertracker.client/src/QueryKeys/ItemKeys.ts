const ItemKeys = {
  GetAllItems: ["Items", "GetAllItems"] as const,
  GetItemById: (itemId: number) => ["Items", "GetItemById", itemId] as const,
  GetItemByName: (itemName: string) =>
    ["Items", "GetItemByName", itemName] as const,
  GetAllItemsBySlotType: (slotType: string) =>
    ["Items", "GetAllItemsBySlotType", slotType] as const,
};

export default ItemKeys;
