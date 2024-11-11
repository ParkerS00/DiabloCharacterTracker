using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Services.ItemServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemController : Controller
{
    private readonly IItemService itemService;

    public ItemController(IItemService itemService)
    {
        this.itemService = itemService;
    }

    [HttpGet("getallitems")]
    public async Task<List<ItemDTO>> GetAllItems()
    {
        return await itemService.GetAllItems();
    }

    [HttpGet("getallitemsbyslottype")]
    public async Task<List<ItemDTO>> GetAllItemsBySlotType(string slotType)
    {
        return await itemService.GetAllItemsBySlotType(slotType);
    }

    [HttpGet("getitembyid")]
    public async Task<ItemDTO> GetItemById(int itemId)
    {
        return await itemService.GetItemById(itemId);
    }

    [HttpGet("getitembyname")]
    public async Task<ItemDTO> GetItemByName(string itemName)
    {
        return await itemService.GetItemByName(itemName);
    }
}
