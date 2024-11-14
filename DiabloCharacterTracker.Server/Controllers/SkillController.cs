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

    [HttpGet("getskillbyid")]
    public async Task<SkillDTO> GetSkillById(int skillId)
    {
        return await skillService.GetSkillById(skillId);
    }

    [HttpGet("getskillbyname")]
    public async Task<SkillDTO> GetSkillByName(string skillName)
    {
        return await skillService.GetSkillByName(skillName);
    }

    [HttpGet("getallskillsbyclassname")]
    public async Task<List<SkillDTO>> GetAllSkillsByClassName(string className)
    {
        return await skillService.GetAllSkillsByClassName(className);
    }
}
