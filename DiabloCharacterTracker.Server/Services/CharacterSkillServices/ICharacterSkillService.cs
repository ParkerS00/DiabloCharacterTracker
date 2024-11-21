using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;

namespace DiabloCharacterTracker.Server.Services.CharacterSkillServices;

public interface ICharacterSkillService
{
    public Task<List<SkillDTO>> GetAllSkillsForCharacter(int characterId);
    public Task<int> AddCharacterSkill(AddCharacterSkillRequest request);
    public Task<bool> RemoveCharacterSkill(int characterSkillId);
}
