using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Services.ItemAffixServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemAffixController : Controller
{
    private readonly IItemAffixService itemAffixService;
    public ItemAffixController(IItemAffixService itemAffixService)
    {
        this.itemAffixService = itemAffixService;
    }

    [HttpPost("additemaffix")]
    public async Task<int> AddItemAffix(AddItemAffixRequest request)
    {
        return await itemAffixService.AddItemAffix(request);
    }

    [HttpGet("getallaffixesforitem")]
    public async Task<List<AffixDTO>> GetAllAffixesByItem(int itemId)
    {
        return await itemAffixService.GetAllAffixesByItem(itemId);
    }

    [HttpGet("getallitemsbyaffix")]
    public async Task<List<ItemDTO>> GetAllItemsByAffix(int affixId)
    {
        return await itemAffixService.GetAllItemsByAffix(affixId);
    }

    [HttpGet("getitemaffixbyid")]
    public async Task<ItemAffixDTO> GetItemAffixById(int itemAffixId)
    {
        return await itemAffixService.GetItemAffixById(itemAffixId);
    }
}
