using DiabloCharacterTracker.Server.DTOs;

namespace DiabloCharacterTracker.Server.Services.CharaterClassServices;

public interface ICharacterClassService
{
    public Task<List<CharacterClassDTO>> GetAllClasses();
    public Task<CharacterClassDTO> GetClassByName(string name);
    public Task<CharacterClassDTO> GetClassById(int characterClassId);
}
