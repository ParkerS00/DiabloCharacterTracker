using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Services.AffixServices;

public class AffixService : IAffixService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;

    public AffixService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<AffixDTO> GetAffixById(int affixId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var affix = await context.Affixes
            .Where(x => x.Id == affixId)
            .FirstOrDefaultAsync();

        if (affix == null) 
        {
            return new AffixDTO();
        }

        return affix.ToDTO();
    }

    public async Task<AffixDTO> GetAffixByName(string affixName)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var affix = await context.Affixes
            .Where(x => x.AffixName == affixName)
            .FirstOrDefaultAsync();

        if (affix == null)
        {
            return new AffixDTO();
        }

        return affix.ToDTO();
    }

    public async Task<List<AffixDTO>> GetAllAffixes()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var affixes = await context.Affixes.ToListAsync();

        if (affixes == null)
        {
            return new List<AffixDTO>();
        }

        return affixes.Select(x => x.ToDTO()).ToList();
    }
}
