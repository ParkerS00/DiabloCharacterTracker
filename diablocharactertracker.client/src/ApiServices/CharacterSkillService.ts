import { Skill } from "../Data/DTOs/skill";
import { AddCharacterSkillRequest } from "../Data/Requests/AddRequests/AddCharacterSkillRequest";
import axios from "axios";

export const CharacterSkillService = {
  AddCharacterSkill: async (
    addCharacterSkillRequest: AddCharacterSkillRequest
  ) => {
    try {
      const response = await axios.post<number>(
        `${import.meta.env.VITE_URL}/CharacterSkill/addcharacterskill`,
        addCharacterSkillRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add character skill");
      throw error;
    }
  },
  GetAllSkillsForCharacter: async (characterId: number) => {
    try {
      const response = await axios.get<Skill[]>(
        `${import.meta.env.VITE_URL}/CharacterSkill/getallskillsforcharacter`,
        {
          params: {
            characterId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all skills for character");
      throw error;
    }
  },
  RemoveCharacterSkill: async (characterSkillId: number) => {
    try {
      const response = await axios.delete<boolean>(
        `${import.meta.env.VITE_URL}/CharacterSkill/removecharacterskill`,
        {
          params: {
            characterSkillId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to remove character skill");
      throw error;
    }
  },
};