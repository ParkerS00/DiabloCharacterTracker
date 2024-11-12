import { AddUserAccountRequest } from "../Data/Requests/AddRequests/AddUserAccountRequest";
import { GetuserAccountRequest } from "../Data/Requests/GetRequests/GetUserAccountRequest";
import { UserAccount } from "../Data/DTOs/UserAccount";
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
  AddCharacter: async (addUserAccountRequest: AddUserAccountRequest) => {
    try {
      const response = await axios.post<number>(
        `${import.meta.env.VITE_URL}/UserAccount/adduser`,
        addUserAccountRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add user");
      throw error;
    }
  },
  GetUserByRequest: async (getUserAccountRequest: GetuserAccountRequest) => {
    try {
      const response = await axios.post<UserAccount>(
        `${import.meta.env.VITE_URL}/UserAccount/getuserbyrequest`,
        getUserAccountRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get user");
      throw error;
    }
  },
  DeleteUser: async (userId: number) => {
    try {
      const response = await axios.delete<boolean>(
        `${import.meta.env.VITE_URL}/UserAccount/deleteuser`,
        {
          params: {
            userId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to delete user");
      throw error;
    }
  },
  GetAuthorizedUser: async (id_token: string) => {
    try {
      const response = await axios.get<UserAccount>(
        `${import.meta.env.VITE_URL}/UserAccount/getauthorizeduser`,
        {
          headers: {
            Authorization: `Bearer ${id_token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get authorized user");
      throw error;
    }
  },
};
