using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.GetRequests;
using DiabloCharacterTracker.Server.Services.CharacterItemServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class CharacterItemController : Controller
{
    private readonly ICharacterItemService characterItemService;
    public CharacterItemController(ICharacterItemService characterItemService)
    {
        this.characterItemService = characterItemService;
    }

    [HttpGet("getallitemsforcharacter")]
    public async Task<List<ItemDTO>> GetAllItemsForCharacter(int characterId)
    {
        return await characterItemService.GetAllItemsForCharacter(characterId);
    }

    [HttpGet("getcharacteritembyid")]
    public async Task<CharacterItemDTO> GetCharacterItemById(int characterItemId)
    {
        return await characterItemService.GetCharacterItemById(characterItemId);
    }

    [HttpPost("addcharacteritem")]
    public async Task<int> AddCharacterItem(AddCharacterItemRequest request)
    {
        return await characterItemService.AddCharacterItem(request);
    }

    [HttpDelete("deletecharacteritem")]
    public async Task<bool> DeleteCharacterItem(int characterItemId)
    {
        return await characterItemService.DeleteCharacterItem(characterItemId);
    }

    [HttpPost("getcharacteritembyrequest")]
    public async Task<CharacterItemDTO> GetCharacterItemByRequest(GetCharacterItemRequest request)
    {
        return await characterItemService.GetCharacterItemByRequest(request);
    }
}
