using DiabloCharacterTracker.Server.Services.SeedingServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class SeedingController : Controller
{
    private readonly ItemSeedingService itemSeedingService;
    private readonly SkillsSeedingService skillSeedingService;

    public SeedingController(ItemSeedingService itemSeedingService, SkillsSeedingService skillSeedingService)
    {
        this.itemSeedingService = itemSeedingService;
        this.skillSeedingService = skillSeedingService;
    }

    [HttpPost("seeditems")]
    public async Task<IActionResult> SeedItems()
    {
        try
        {
            await itemSeedingService.SeedItemsAsync();
            return Ok("Item seeding completed successfully.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error seeding items: {ex.Message}");
        }
    }

    [HttpPost("seedskills")]
    public async Task<IActionResult> SeedSkills()
    {
        try
        {
            await skillSeedingService.SeedSkillsAsync("https://d4api.dev/api/class/rogue/skills");
            return Ok("Skill seeding completed successfully");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error seeding skills: {ex.Message}");
        }
    }
}