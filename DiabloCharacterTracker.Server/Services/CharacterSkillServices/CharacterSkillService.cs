using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace DiabloCharacterTracker.Server.Services.CharacterSkillServices;

public class CharacterSkillService : ICharacterSkillService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;
    public CharacterSkillService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }
    public async Task<int> AddCharacterSkill(AddCharacterSkillRequest request)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var possibleCharacterSkill = await context.CharacterSkills
            .Where(x => x.PlayableCharacterId == request.PlayableCharacterId)
            .Where(x => x.SkillId == request.SkillId)
            .FirstOrDefaultAsync();

        if (possibleCharacterSkill != null)
        {
            return 0;
        }

        CharacterSkill newCharackterSkill = new CharacterSkill()
        {
            PlayableCharacterId = request.PlayableCharacterId,
            SkillId = request.SkillId,
        };

        if (newCharackterSkill == null)
        {
            return 0;
        }

        await context.AddAsync(newCharackterSkill);
        await context.SaveChangesAsync();
        return newCharackterSkill.Id;
    }

    public async Task<List<SkillDTO>> GetAllSkillsForCharacter(int characterId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterSkills = await context.CharacterSkills
            .Include(x => x.Skill)
            .Where(x => x.PlayableCharacterId == characterId)
            .ToListAsync();

        if (characterSkills == null)
        {
            return new List<SkillDTO>();
        }

        return characterSkills.Select(x => x.Skill!.ToDTO()).ToList();
    }

    public async Task<bool> RemoveCharacterSkill(int characterSkillId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterSkillToRemove = await context.CharacterSkills
            .Where(x => x.Id == characterSkillId)
            .FirstOrDefaultAsync();

        if (characterSkillToRemove == null)
        {
            return false;
        }

        context.Remove(characterSkillToRemove);
        await context.SaveChangesAsync();
        return true;
    }
}
