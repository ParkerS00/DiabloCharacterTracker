import { UserAccountContext } from "../Data/Context/UserAccountContext";
import { GetuserAccountRequest } from "../Data/Requests/GetRequests/GetUserAccountRequest";
import { UserAccountQueries } from "../Queries/UserAccountQueries";
import React from "react";
import { ReactNode } from "react";
import { useAuth } from "react-oidc-context";

export const UserAccountContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const getUserAccountRequest: GetuserAccountRequest = {
    email: user?.profile.email ?? "",
  };

  const {
    data: usr,
    isLoading,
    error,
  } = UserAccountQueries.useGetUserAccountByRequest(getUserAccountRequest);

  return (
    <UserAccountContext.Provider
      value={{
        usr: usr,
        error: error?.message,
        isLoading,
      }}
    >
      {children}
    </UserAccountContext.Provider>
  );
};
