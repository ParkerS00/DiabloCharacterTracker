using DiabloCharacterTracker.Server.DTOs;

namespace DiabloCharacterTracker.Server.Services.SkillServices;

public interface ISkillService
{
    public Task<List<SkillDTO>> GetAllSkills();
    public Task<SkillDTO> GetSkillById(int skillId);
    public Task<SkillDTO> GetSkillByName(string skillName);
}
