using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Services.AffixServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class AffixController : Controller
{
    private readonly IAffixService affixService;

    public AffixController(IAffixService affixService)
    {
        this.affixService = affixService;
    }

    [HttpGet("getaffixbyid")]
    public async Task<AffixDTO> GetAffixById(int affixId)
    {
        return await affixService.GetAffixById(affixId);
    }

    [HttpGet("getaffixbyname")]
    public async Task<AffixDTO> GetAffixByName(string affixName)
    {
        return await affixService.GetAffixByName(affixName);
    }

    [HttpGet("getallaffixes")]
    public async Task<List<AffixDTO>> GetAllAffixes()
    {
        return await affixService.GetAllAffixes();
    }
}
