using DiabloCharacterTracker.Server.Services.SeedingServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class SeedingController : Controller
{
    private readonly ItemSeedingService itemSeedingService;

    public SeedingController(ItemSeedingService itemSeedingService)
    {
        this.itemSeedingService = itemSeedingService;
    }

    [HttpPost("seeditems")]
    public async Task<IActionResult> SeedItems()
    {
        try
        {
            await itemSeedingService.SeedItemsAsync();
            return Ok("Item seeding complete successfully.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error seeding items: {ex.Message}");
        }
    }
}