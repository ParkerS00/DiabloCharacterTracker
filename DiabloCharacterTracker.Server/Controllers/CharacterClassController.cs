using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Services.CharaterClassServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class CharacterClassController : Controller
{
    private readonly ICharacterClassService characterClassService;

    public CharacterClassController(ICharacterClassService characterClassService)
    {
        this.characterClassService = characterClassService;
    }

    [HttpGet("getallcharacterclasses")]
    public async Task<List<CharacterClassDTO>> GetAllCharacterClasses()
    {
        return await characterClassService.GetAllClasses();
    }

    [HttpGet("getcharacterclassbyid")]
    public async Task<CharacterClassDTO> GetCharacterClassById(int characterClassId)
    {
        return await characterClassService.GetClassById(characterClassId);
    }

    [HttpGet("getcharacterclassbyname")]
    public async Task<CharacterClassDTO> GetCharacterClassByName(string characterClassName)
    {
        return await characterClassService.GetClassByName(characterClassName);
    }
}
