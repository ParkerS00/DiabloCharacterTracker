import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../QueryKeys/UserAccountKeys";
import { UserAccountServices } from "../ApiServices/UserAccountServices";
import { AddUserAccountRequest } from "../Data/Requests/AddRequests/AddUserAccountRequest";
import { GetuserAccountRequest } from "../Data/Requests/GetRequests/GetUserAccountRequest";

export const UserAccountQueries = {
  useGetUserAccountById: (userId: number) => {
    return useQuery({
      queryKey: keys.GetUserAccountById(userId),
      queryFn: () => UserAccountServices.GetUserById(userId),
    });
  },
  useAddUserAccount: (addUserAccountRequest: AddUserAccountRequest) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () => UserAccountServices.AddCharacter(addUserAccountRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: keys.AddUserAccount(addUserAccountRequest.email),
        });
      },
    });
  },
  useGetUserAccountByRequest: (
    getUserAccountRequest: GetuserAccountRequest
  ) => {
    return useQuery({
      queryKey: keys.GetUserAccountByRequest(getUserAccountRequest.email),
      queryFn: () =>
        UserAccountServices.GetUserByRequest(getUserAccountRequest),
    });
  },
  useDeleteUserAccount: (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () => UserAccountServices.DeleteUser(userId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: keys.DeleteUserAccount,
        });
      },
    });
  },
};
