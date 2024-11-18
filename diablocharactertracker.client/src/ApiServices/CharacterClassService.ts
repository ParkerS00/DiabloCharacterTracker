import { CharacterClass } from "@/Data/DTOs/CharacterClass";
import axios from "axios";

export const CharacterClassService = {
  GetAllCharacterClasses: async () => {
    try {
      const response = await axios.get<CharacterClass[]>(
        `${import.meta.env.VITE_URL}/CharacterClass/getallcharacterclasses`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all character classes");
      throw error;
    }
  },
  GetCharacterClassById: async (characterClassId: number) => {
    try {
      const response = await axios.get<CharacterClass>(
        `${import.meta.env.VITE_URL}/CharacterClass/getcharacterclassbyid`,
        {
          params: {
            characterClassId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get character class by id");
      throw error;
    }
  },
  GetCharacterClassByName: async (characterClassName: string) => {
    try {
      const response = await axios.get<CharacterClass>(
        `${import.meta.env.VITE_URL}/CharacterClass/getcharacterclassbyname`,
        {
          params: {
            characterClassName,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get character class by name");
      throw error;
    }
  },
};
