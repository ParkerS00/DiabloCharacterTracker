import { ItemAffixService } from "../ApiServices/ItemAffixService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../QueryKeys/ItemAffixKeys";
import { AddItemAffixRequest } from "@/Data/Requests/AddRequests/AddItemAffixRequest";

export const ItemAffixQueries = {
  useGetAllAffixesByItem: () => {
    return useQuery({
      queryFn: () => ItemAffixService.GetAllAffixesByItem,
      queryKey: keys.GetAllAffixesByItem,
    });
  },
  useGetAllItemsByAffix: () => {
    return useQuery({
      queryFn: () => ItemAffixService.GetAllItemsByAffix,
      queryKey: keys.GetAllItemsByAffix,
    });
  },
  useGetItemAffixById: (itemAFfixId: number) => {
    return useQuery({
      queryFn: () => ItemAffixService.GetItemAffixById(itemAFfixId),
      queryKey: keys.GetItemAffixById(itemAFfixId),
    });
  },
  useAddItemAffix: (addItemAffixRequest: AddItemAffixRequest) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () => ItemAffixService.AddItemAffix(addItemAffixRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: keys.AddItemAffix });
      },
    });
  },
};
