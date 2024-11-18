import { CharacterClassService } from "../ApiServices/CharacterClassService";
import { useQuery } from "@tanstack/react-query";
import keys from "../QueryKeys/CharacterClassKeys";

export const CharacterClassQueries = {
  useGetAllCharacterClasses: () => {
    return useQuery({
      queryFn: () => CharacterClassService.GetAllCharacterClasses(),
      queryKey: keys.GetAllCharacterClasses,
    });
  },
  useGetCharacterClassById: (characterClassId: number) => {
    return useQuery({
      queryFn: () =>
        CharacterClassService.GetCharacterClassById(characterClassId),
      queryKey: keys.GetCharacterClassById(characterClassId),
    });
  },
  useGetCharacterClassByName: (characterClassName: string) => {
    return useQuery({
      queryFn: () =>
        CharacterClassService.GetCharacterClassByName(characterClassName),
      queryKey: keys.GetCharacterClassByName(characterClassName),
    });
  },
};
