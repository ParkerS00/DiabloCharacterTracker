import { Skill } from "../Data/DTOs/Skill";
import axios from "axios";

export const SkillService = {
  GetAllSkills: async () => {
    try {
      const response = await axios.get<Skill[]>(
        `${import.meta.env.VITE_URL}/Skill/getallskills`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all skills");
      throw error;
    }
  },
  GetSkillById: async (skillId: number) => {
    try {
      const response = await axios.get<Skill>(
        `${import.meta.env.VITE_URL}/Skill/getskillbyid`,
        {
          params: {
            skillId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get skill by id");
      throw error;
    }
  },
  GetSkillByName: async (skillName: string) => {
    try {
      const response = await axios.get<Skill>(
        `${import.meta.env.VITE_URL}/Skill/getskillbyname`,
        {
          params: {
            skillName,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get skill by name");
      throw error;
    }
  },
  GetAllSkillsByClassName: async (className: string) => {
    try {
      const response = await axios.get<Skill[]>(
        `${import.meta.env.VITE_URL}/Skill/getallskillsbyclassname`,
        {
          params: {
            className,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all skill for class");
      throw error;
    }
  },
};
