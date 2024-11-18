import { Item } from "@/Data/DTOs/Item";
import { Affix } from "../Data/DTOs/Affix";
import axios from "axios";
import { ItemAffix } from "@/Data/DTOs/ItemAffix";
import { AddItemAffixRequest } from "@/Data/Requests/AddRequests/AddItemAffixRequest";

export const ItemAffixService = {
  GetAllAffixesByItem: async () => {
    try {
      const response = await axios.get<Affix[]>(
        `${import.meta.env.VITE_URL}/ItemAffix/getallaffixesforitem`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all affexes by item");
      throw error;
    }
  },
  GetAllItemsByAffix: async () => {
    try {
      const response = await axios.get<Item[]>(
        `${import.meta.env.VITE_URL}/ItemAffix/getallitemsbyaffix`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all items by affix");
      throw error;
    }
  },
  GetItemAffixById: async (itemAffixId: number) => {
    try {
      const response = await axios.get<ItemAffix>(
        `${import.meta.env.VITE_URL}/ItemAffix/getitemaffixbyid`,
        {
          params: {
            itemAffixId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get item affix by id");
      throw error;
    }
  },
  AddItemAffix: async (addItemAffixRequest: AddItemAffixRequest) => {
    try {
      const response = await axios.post<number>(
        `${import.meta.env.VITE_URL}/ItemAffix/additemaffix`,
        addItemAffixRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add affix to item");
      throw error;
    }
  },
};
