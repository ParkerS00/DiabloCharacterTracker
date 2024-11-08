import { useQuery } from "@tanstack/react-query";
import keys from "../QueryKeys/UserAccountKeys";
import { UserAccountServices } from "@/ApiServices/UserAccountServices";

export const UserAccountQueries = {
  useGetUserAccountById: (userId: number) => {
    return useQuery({
      queryKey: keys.GetUserAccountById(userId),
      queryFn: () => UserAccountServices.GetUserById(userId),
    });
  },
};
