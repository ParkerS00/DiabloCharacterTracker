import { Item } from "../Data/DTOs/Item";
import axios from "axios";

export const ItemService = {
  getAllItems: async () => {
    try {
      const response = await axios.get<Item[]>(
        `${import.meta.env.VITE_URL}/Item/getallitems`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all items");
      throw error;
    }
  },
  getItemById: async (itemId: number) => {
    try {
      const response = await axios.get<Item>(
        `${import.meta.env.VITE_URL}/Item/getitembyid`,
        {
          params: {
            itemId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get character item at id");
      throw error;
    }
  },
  getItemByName: async (itemName: string) => {
    try {
      const response = await axios.get<Item>(
        `${import.meta.env.VITE_URL}/Item/getitembyname`,
        {
          params: {
            itemName,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get item by name");
      throw error;
    }
  },
  getAllItemsBySlotType: async (slotType: string) => {
    try {
      const response = await axios.get<Item[]>(
        `${import.meta.env.VITE_URL}/Item/getallitemsbyslottype`,
        {
          params: {
            slotType,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get all items for slot type");
      throw error;
    }
  },
};
