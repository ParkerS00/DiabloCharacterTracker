using DiabloCharacterTracker.Server.DTOs;

namespace DiabloCharacterTracker.Server.Services.AffixServices;

public interface IAffixService
{
    public Task<List<AffixDTO>> GetAllAffixes();
    public Task<AffixDTO> GetAffixById(int affixId);
    public Task<AffixDTO> GetAffixByName(string affixName);
}
