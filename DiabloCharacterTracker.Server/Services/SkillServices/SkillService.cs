using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Services.SkillServices;

public class SkillService : ISkillService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;

    public SkillService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<List<SkillDTO>> GetAllSkills()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var skills = await context.Skills.ToListAsync();

        if (skills == null)
        {
            return new List<SkillDTO>();
        };

        return skills.Select(x => x.ToDTO()).ToList();  
    }

    public Task<SkillDTO> GetSkillById(int skillId)
    {
        throw new NotImplementedException();
    }

    public Task<SkillDTO> GetSkillByName(string skillName)
    {
        throw new NotImplementedException();
    }
}
