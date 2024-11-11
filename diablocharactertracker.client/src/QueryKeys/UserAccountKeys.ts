const UserAccountKeys = {
  GetUserAccountById: (userId: number) =>
    ["UserAccount", "GetUserAccountById", userId] as const,
  AddUserAccount: (email: string) =>
    ["UserAccount", "AddUserAccount", email] as const,
  GetUserAccountByRequest: (email: string) =>
    ["UserAccount", "GetUserAccountByRequest", email] as const,
  DeleteUserAccount: ["UserAccount", "DeleteUserAccount"] as const,
  GetAuthorizedUserAccount: [
    "UserAccount",
    "GetAuthorizedUserAccount",
  ] as const,
};

export default UserAccountKeys;
