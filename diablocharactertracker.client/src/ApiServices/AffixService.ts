import { Affix } from "@/Data/DTOs/Affix";
import axios from "axios";

export const AffixService = {
  GetAllAffixes: async () => {
    try {
      const response = await axios.get<Affix[]>(
        `${import.meta.env.VITE_URL}/Affix/getallaffixes`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all affixes");
      throw error;
    }
  },
  GetAffixById: async (affixId: number) => {
    try {
      const response = await axios.get<Affix>(
        `${import.meta.env.VITE_URL}/Affix/getaffixbyid`,
        {
          params: {
            affixId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get affix by id");
      throw error;
    }
  },
  GetAffixByName: async (affixName: string) => {
    try {
      const response = await axios.get<Affix>(
        `${import.meta.env.VITE_URL}/Affix/getaffixbyname`,
        {
          params: {
            affixName,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get affix by name");
      throw error;
    }
  },
};
