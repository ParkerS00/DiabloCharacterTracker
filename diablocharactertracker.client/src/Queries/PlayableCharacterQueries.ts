import { PlayableCharacterService } from "../ApiServices/PlayableCharacterService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../QueryKeys/PlayableCharacterKeys";
import { AddPlayableCharacterRequest } from "../Data/Requests/AddRequests/AddPlayableCharacterRequest";
import { UpdatePlayableCharacterRequest } from "../Data/Requests/UpdateRequests/UpdatePlayableCharacterRequests";

export const PlayableCharacterQueries = {
  useGetPlayableCharacterById: (characterId: number) => {
    return useQuery({
      queryFn: () => PlayableCharacterService.GetCharacterById(characterId),
      queryKey: keys.GetPlayableCharacterById(characterId),
    });
  },
  useAddPlayableCharacter: (
    addCharacterRequest: AddPlayableCharacterRequest
  ) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () =>
        PlayableCharacterService.AddCharacter(addCharacterRequest),
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: keys.GetAllCharactersForUser,
        }),
    });
  },
  useUpdatePlayableCharacter: (
    updatePlayableCharacterRequest: UpdatePlayableCharacterRequest
  ) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () =>
        PlayableCharacterService.UpdateCharacter(
          updatePlayableCharacterRequest
        ),
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: keys.UpdatePlayableCharacter,
        }),
    });
  },
  useDeletePlayableCharacter: (characterId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () => PlayableCharacterService.DeleteCharacter(characterId),
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: keys.GetAllCharactersForUser,
        }),
    });
  },
  useGetAllCharactersForUser: (userAccountId: number) => {
    return useQuery({
      queryFn: () =>
        PlayableCharacterService.GetAllCharactersForUser(userAccountId),
      queryKey: keys.GetAllCharactersForUser,
    });
  },
};
