using DiabloCharacterTracker.Server.DTOs;

namespace DiabloCharacterTracker.Server.Services.ItemServices;

public interface IItemService
{
    public Task<List<ItemDTO>> GetAllItems();
    public Task<ItemDTO> GetItemById(int itemId);
    public Task<ItemDTO> GetItemByName(string itemName);
    public Task<List<ItemDTO>> GetAllItemsBySlotType(string slotType);
}
