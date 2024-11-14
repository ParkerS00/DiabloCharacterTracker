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

    public async Task<SkillDTO> GetSkillById(int skillId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var skill = await context.Skills
            .Where(x => x.Id == skillId)
            .FirstOrDefaultAsync();

        if (skill == null)
        {
            return new SkillDTO();
        }

        return skill.ToDTO();
    }

    public async Task<SkillDTO> GetSkillByName(string skillName)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var skill = await context.Skills
            .Where(x => x.SkillName == skillName)
            .FirstOrDefaultAsync();

        if (skill == null)
        {
            return new SkillDTO(); 
        }

        return skill.ToDTO();   
    }

    public async Task<List<SkillDTO>> GetAllSkillsByClassName(string className)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var skills = await context.Skills
            .Where(x => x.ClassName == className)
            .ToListAsync();

        if (skills == null)
        {
            return new List<SkillDTO>();
        }

        return skills.Select(x => x.ToDTO()).ToList();  
    }
}
