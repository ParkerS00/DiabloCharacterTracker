using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.GetRequests;

namespace DiabloCharacterTracker.Server.Services.CharacterItemServices;

public interface ICharacterItemService
{
    public Task<List<ItemDTO>> GetAllItemsForCharacter(int characterId);
    public Task<CharacterItemDTO> GetCharacterItemById(int characterItemId);
    public Task<int> AddCharacterItem(AddCharacterItemRequest request);
    public Task<bool> DeleteCharacterItem(int characterItemId); 
    public Task<CharacterItemDTO> GetCharacterItemByRequest(GetCharacterItemRequest request);
}
