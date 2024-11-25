import { CharacterItemService } from "../ApiServices/CharacterItemService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../QueryKeys/CharacterItemKeys";
import { AddCharacterItemRequest } from "@/Data/Requests/AddRequests/AddCharacterItemRequest";
import { GetCharacterItemRequest } from "@/Data/Requests/GetRequests/GetCharacterItemRequest";

export const CharacterItemQueries = {
  useGetAllItemsForCharacter: (characterId: number) => {
    return useQuery({
      queryFn: () => CharacterItemService.GetAllItemsForCharacter(characterId),
      queryKey: keys.GetAllItemsForCharacter,
    });
  },
  useGetCharacterItemById: (characterItemId: number) => {
    return useQuery({
      queryFn: () => CharacterItemService.GetCharacterItemById(characterItemId),
      queryKey: keys.GetCharacterItemById(characterItemId),
    });
  },
  useAddCharacterItem: (addCharacterItemRequest: AddCharacterItemRequest) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () =>
        CharacterItemService.AddCharacterItem(addCharacterItemRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: keys.AddCharacterItem });
      },
    });
  },
  useDeleteCharacterItem: (characterItemId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () =>
        CharacterItemService.DeleteCharacterItem(characterItemId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: keys.GetAllItemsForCharacter,
        });
      },
    });
  },

  useGetCharacterItemByRequest: (
    getCharacterItemRequest: GetCharacterItemRequest
  ) => {
    return useQuery({
      queryFn: () =>
        CharacterItemService.GetCharacterItemByRequest(getCharacterItemRequest),
      queryKey: [
        keys.GetCharacterItemByRequest,
        getCharacterItemRequest.playableCharacterId,
        getCharacterItemRequest.itemId,
      ],
    });
  },
};
