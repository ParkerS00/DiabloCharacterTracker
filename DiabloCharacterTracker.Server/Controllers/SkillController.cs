using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Services.SkillServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class SkillController : Controller
{
    private readonly ISkillService skillService;

    public SkillController(ISkillService skillService)
    {
        this.skillService = skillService;
    }

    [HttpGet("getallskills")]
    public async Task<List<SkillDTO>> GetAllSkills()
    {
        return await skillService.GetAllSkills();   
    }
}
