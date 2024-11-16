import { PlayableCharacter } from "../Data/DTOs/PlayableCharacter";
import { AddPlayableCharacterRequest } from "../Data/Requests/AddRequests/AddPlayableCharacterRequest";
import { UpdatePlayableCharacterRequest } from "../Data/Requests/UpdateRequests/UpdatePlayableCharacterRequests";
import axios from "axios";

export const PlayableCharacterService = {
  GetCharacterById: async (characterId: number) => {
    try {
      const response = await axios.get<PlayableCharacter>(
        `${
          import.meta.env.VITE_URL
        }/PlayableCharacter/getplayablecharacterbyid`,
        {
          params: {
            characterId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get playable character by id");
      throw error;
    }
  },
  AddCharacter: async (addCharacterRequest: AddPlayableCharacterRequest) => {
    try {
      const response = await axios.post<number>(
        `${import.meta.env.VITE_URL}/PlayableCharacter/addplayablecharacter`,
        addCharacterRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add playable character");
      throw error;
    }
  },
  UpdateCharacter: async (
    updatePlayableCharacterRequest: UpdatePlayableCharacterRequest
  ) => {
    try {
      const response = await axios.patch<PlayableCharacter>(
        `${import.meta.env.VITE_URL}/PlayableCharacter/updateplayablecharacter`,
        updatePlayableCharacterRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to update playable character");
      throw error;
    }
  },
  DeleteCharacter: async (characterId: number) => {
    try {
      const response = await axios.delete<boolean>(
        `${import.meta.env.VITE_URL}/PlayableCharacter/deleteplayablecharacter`,
        {
          params: {
            characterId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to delete playable character");
      throw error;
    }
  },
};
