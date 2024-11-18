import { AffixService } from "../ApiServices/AffixService";
import { useQuery } from "@tanstack/react-query";
import keys from "../QueryKeys/AffixKeys";

export const AffixQueries = {
  useGetAllAffixes: () => {
    return useQuery({
      queryFn: () => AffixService.GetAllAffixes(),
      queryKey: keys.GetAllAffixes,
    });
  },
  useGetAffixById: (affixId: number) => {
    return useQuery({
      queryFn: () => AffixService.GetAffixById(affixId),
      queryKey: keys.GetAffixById(affixId),
    });
  },
  useGetAffixByName: (affixName: string) => {
    return useQuery({
      queryFn: () => AffixService.GetAffixByName(affixName),
      queryKey: keys.GetAffixByName(affixName),
    });
  },
};
