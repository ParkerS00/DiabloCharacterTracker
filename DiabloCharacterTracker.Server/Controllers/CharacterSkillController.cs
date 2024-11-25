using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.GetRequests;
using DiabloCharacterTracker.Server.Services.CharacterSkillServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class CharacterSkillController : Controller
{
    private readonly ICharacterSkillService characterSkillService;
    public CharacterSkillController(ICharacterSkillService characterSkillService)
    {
        this.characterSkillService = characterSkillService;
    }

    [HttpPost("addcharacterskill")]
    public async Task<int> AddCharacterSkill(AddCharacterSkillRequest request)
    {
        return await characterSkillService.AddCharacterSkill(request);
    }

    [HttpGet("getallskillsforcharacter")]
    public async Task<List<SkillDTO>> GetAllSkillsForCharacter(int characterId)
    {
        return await characterSkillService.GetAllSkillsForCharacter(characterId);
    }

    [HttpDelete("removecharacterskill")]
    public async Task<bool> RemoveCharacterSkill(int characterSkillId)
    {
        return await characterSkillService.RemoveCharacterSkill(characterSkillId);
    }

    [HttpPost("getcharacterskillbyrequest")]
    public async Task<CharacterSkillDTO> GetCharacterSkillByRequest(GetCharacterSkillRequest request)
    {
        return await characterSkillService.GetCharacterSkillByRequest(request);
    }
}
