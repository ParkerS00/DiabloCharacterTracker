using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.UpdateRequests;

namespace DiabloCharacterTracker.Server.Services.PlayableCharacterServices;

public interface IPlayableCharacterService
{
    public Task<PlayableCharacterDTO> GetCharachterById(int characterId);
    public Task<int> AddCharacter(AddPlayableCharacterRequest request);
    public Task<PlayableCharacterDTO> UpdateCharacter(UpdatePlayableCharacterRequest request);
    public Task<bool> DeleteCharacter(int characterId);
    public Task<List<PlayableCharacterDTO>> GetAllCharactersForUser(int userAccountId);
}
