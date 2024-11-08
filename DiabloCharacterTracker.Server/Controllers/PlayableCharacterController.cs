using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.UpdateRequests;
using DiabloCharacterTracker.Server.Services.PlayableCharacterServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayableCharacterController 
{
    private readonly IPlayableCharacterService playableCharacterService;

    public PlayableCharacterController(IPlayableCharacterService playableCharacterService)
    {
        this.playableCharacterService = playableCharacterService;
    }

    [HttpPost("addplayablecharacter")]
    public async Task<int> AddPlayableCharacter(AddPlayableCharacterRequest request)
    {
        return await playableCharacterService.AddCharacter(request);
    }

    [HttpGet("getplayablecharacterbyid")]
    public async Task<PlayableCharacterDTO> GetPlayableCharacterById(int characterId)
    {
        return await playableCharacterService.GetCharachterById(characterId);
    }

    [HttpPatch("updateplayablecharacter")]
    public async Task<PlayableCharacterDTO> UpdatePlayableCharacter(UpdatePlayableCharacterRequest request)
    {
        return await playableCharacterService.UpdateCharacter(request);
    }

    [HttpDelete("deleteplayablecharacter")]
    public async Task<bool> DeletePlayableCharacter(int characterId)
    {
        return await playableCharacterService.DeleteCharacter(characterId);
    }
}
