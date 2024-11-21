import { CharacterSkillService } from "../ApiServices/CharacterSkillService";
import { AddCharacterSkillRequest } from "../Data/Requests/AddRequests/AddCharacterSkillRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../QueryKeys/CharacterSkillKeys";

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
      queryKey: keys.GetAllSkillsForCharacter(characterId),
    });
  },
  useRemoveCharacterSkill: (characterSkillId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () =>
        CharacterSkillService.RemoveCharacterSkill(characterSkillId),
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: keys.RemoveCharacterSkill(characterSkillId),
        }),
    });
  },
};
