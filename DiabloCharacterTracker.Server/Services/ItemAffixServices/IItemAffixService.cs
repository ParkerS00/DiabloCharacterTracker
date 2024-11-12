using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;

namespace DiabloCharacterTracker.Server.Services.ItemAffixServices;

public interface IItemAffixService
{
    public Task<List<AffixDTO>> GetAllAffixesByItem(int itemId);
    public Task<List<ItemDTO>> GetAllItemsByAffix(int affixId);
    public Task<ItemAffixDTO> GetItemAffixById(int itemAffixId);
    public Task<int> AddItemAffix(AddItemAffixRequest request);
    public Task<bool> DeleteItemAffix(int itemAffixId);
}
