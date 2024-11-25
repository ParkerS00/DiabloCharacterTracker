import { CharacterSkillService } from "../ApiServices/CharacterSkillService";
import { AddCharacterSkillRequest } from "../Data/Requests/AddRequests/AddCharacterSkillRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../QueryKeys/CharacterSkillKeys";
import { GetCharacterSkillRequest } from "@/Data/Requests/GetRequests/GetCharacterSkillRequest";

export const CharacterSkillQueries = {
  useAddCharacterSkill: (
    addCharacterSkillRequest: AddCharacterSkillRequest
  ) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () =>
        CharacterSkillService.AddCharacterSkill(addCharacterSkillRequest),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: keys.AddCharacterKill }),
    });
  },
  useGetAllSkillsForCharacter: (characterId: number) => {
    return useQuery({
      queryFn: () =>
        CharacterSkillService.GetAllSkillsForCharacter(characterId),
      queryKey: keys.GetAllSkillsForCharacter,
    });
  },
  useRemoveCharacterSkill: (characterSkillId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () =>
        CharacterSkillService.RemoveCharacterSkill(characterSkillId),
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: keys.GetAllSkillsForCharacter,
        }),
    });
  },
  useGetCharacterSkillByRequest: (
    getCharacterSkillRequest: GetCharacterSkillRequest
  ) => {
    return useQuery({
      queryFn: () =>
        CharacterSkillService.GetCharacterSkillByRequest(
          getCharacterSkillRequest
        ),
      queryKey: [
        keys.GetCharacterSkillByRequest,
        getCharacterSkillRequest.skillId,
        getCharacterSkillRequest.playableCharacterId,
      ],
    });
  },
};
