import { CharacterItem } from "@/Data/DTOs/CharacterItem";
import { Item } from "../Data/DTOs/Item";
import axios from "axios";
import { AddCharacterItemRequest } from "@/Data/Requests/AddRequests/AddCharacterItemRequest";

export const CharacterItemService = {
  GetAllItemsForCharacter: async (characterId: number) => {
    try {
      const response = await axios.get<Item[]>(
        `${import.meta.env.VITE_URL}/CharacterItem/getallitemsforcharacter`,
        {
          params: {
            characterId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all items for character");
      throw error;
    }
  },
  GetCharacterItemById: async (characterItemId: number) => {
    try {
      const response = await axios.get<CharacterItem>(
        `${import.meta.env.VITE_URL}/CharacterItem/getcharacteritembyid`,
        {
          params: {
            characterItemId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get character item by id");
      throw error;
    }
  },
  AddCharacterItem: async (
    addCharacterItemRequest: AddCharacterItemRequest
  ) => {
    try {
      const response = await axios.post<number>(
        `${import.meta.env.VITE_URL}/CharacterItem/addcharacteritem`,
        addCharacterItemRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add character item");
      throw error;
    }
  },
  DeleteCharacterItem: async (characterItemId: number) => {
    try {
      const resposne = await axios.delete<boolean>(
        `${import.meta.env.VITE_URL}/CharacterItem/deletecharacteritem`,
        {
          params: {
            characterItemId,
          },
        }
      );
      return resposne.data;
    } catch (error) {
      console.error("Failed to delete character item");
      throw error;
    }
  },
};
