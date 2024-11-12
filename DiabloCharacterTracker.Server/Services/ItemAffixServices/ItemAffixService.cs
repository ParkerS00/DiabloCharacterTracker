using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Services.ItemAffixServices;

public class ItemAffixService : IItemAffixService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;
    public ItemAffixService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }
    public async Task<int> AddItemAffix(AddItemAffixRequest request)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var possibleItemAffix = await context.ItemAffixes
            .Where(x => x.AffixId == request.AffixId)
            .Where(x => x.ItemId == request.ItemId)
            .FirstOrDefaultAsync();

        if (possibleItemAffix != null)
        {
            return 0;
        }

        ItemAffix newItemAffix = new ItemAffix()
        {
            AffixId = request.AffixId,
            ItemId = request.ItemId,
        };

        if (newItemAffix == null)
        {
            return 0;
        }

        await context.ItemAffixes.AddAsync(newItemAffix);
        await context.SaveChangesAsync();
        return newItemAffix.Id;
    }

    public async Task<bool> DeleteItemAffix(int itemAffixId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var itemAffixToDelete = await context.ItemAffixes
            .Where(x => x.Id == itemAffixId)
            .FirstOrDefaultAsync();

        if (itemAffixToDelete == null)
        {
            return false;
        }

        context.Remove(itemAffixToDelete);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<List<AffixDTO>> GetAllAffixesByItem(int itemId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var affixes = await context.ItemAffixes
            .Include(x => x.Affix)
            .Include(x => x.Item)
            .Where(x => x.ItemId == itemId)
            .ToListAsync();

        if (affixes == null)
        {
            return new List<AffixDTO>();
        }

        return affixes.Select(x => x.Affix!.ToDTO()).ToList();
    }

    public async Task<List<ItemDTO>> GetAllItemsByAffix(int affixId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var items = await context.ItemAffixes
            .Include(x => x.Affix)
            .Include(x => x.Item)
            .Where(x => x.AffixId == affixId)
            .ToListAsync();

        if (items == null)
        {
            return new List<ItemDTO>();
        }

        return items.Select(x => x.Item!.ToDTO()).ToList(); 
    }

    public async Task<ItemAffixDTO> GetItemAffixById(int itemAffixId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var itemAffix = await context.ItemAffixes
            .Where(x => x.Id == itemAffixId)
            .FirstOrDefaultAsync();

        if (itemAffix == null)
        {
            return new ItemAffixDTO();
        }

        return itemAffix.ToDTO();
    }
}
