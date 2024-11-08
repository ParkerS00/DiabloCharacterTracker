import { UserAccount } from "@/Data/UserAccount";
import axios from "axios";

export const UserAccountServices = {
  GetUserById: async (userId: number) => {
    try {
      const response = await axios.get<UserAccount>(
        `${import.meta.env.VITE_URL}/UserAccount/getuserbyid`,
        {
          params: {
            userId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get user");
      throw error;
    }
  },
};
