using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Services.CharaterClassServices;
public class CharacterClassService : ICharacterClassService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;

    public CharacterClassService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<List<CharacterClassDTO>> GetAllClasses()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var allCharacterClasses = await context.CharacterClasses.ToListAsync();

        if (allCharacterClasses == null)
        {
            return new List<CharacterClassDTO>();
        }

        return allCharacterClasses.Select(x => x.ToDTO()).ToList();  
    }

    public async Task<CharacterClassDTO> GetClassById(int characterClassId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterClass = await context.CharacterClasses
            .Where(x => x.Id == characterClassId)
            .FirstOrDefaultAsync();

        if (characterClass == null)
        {
            return new CharacterClassDTO();
        }

        return characterClass.ToDTO();
    }

    public async Task<CharacterClassDTO> GetClassByName(string name)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterClass = await context.CharacterClasses
            .Where(x => x.ClassName == name)
            .FirstOrDefaultAsync();

        if (characterClass == null)
        {
            return new CharacterClassDTO();
        }

        return characterClass.ToDTO();  
    }
}
