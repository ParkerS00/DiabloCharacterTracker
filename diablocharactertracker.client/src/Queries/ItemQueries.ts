import { ItemService } from "../ApiServices/ItemService";
import { useQuery } from "@tanstack/react-query";
import keys from "../QueryKeys/ItemKeys";

export const ItemQueries = {
  useGetAllItems: () => {
    return useQuery({
      queryFn: () => ItemService.getAllItems(),
      queryKey: keys.GetAllItems,
    });
  },
  useGetItemById: (itemId: number) => {
    return useQuery({
      queryFn: () => ItemService.getItemById(itemId),
      queryKey: keys.GetItemById(itemId),
    });
  },
  useGetItemByName: (itemName: string) => {
    return useQuery({
      queryFn: () => ItemService.getItemByName(itemName),
      queryKey: keys.GetItemByName(itemName),
    });
  },
  useGetAllItemsBySlotType: (slotType: string) => {
    return useQuery({
      queryFn: () => ItemService.getAllItemsBySlotType(slotType),
      queryKey: keys.GetAllItemsBySlotType(slotType),
    });
  },
};
