import React from "react";
import { UserAccount } from "../DTOs/UserAccount";

export interface UserAccountContextInterface {
  usr: UserAccount | undefined;
  error: string | undefined;
  isLoading: boolean;
}

export const UserAccountContext =
  React.createContext<UserAccountContextInterface | null>(null);
