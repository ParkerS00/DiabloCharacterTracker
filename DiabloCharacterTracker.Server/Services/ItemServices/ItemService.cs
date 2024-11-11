using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace DiabloCharacterTracker.Server.Services.ItemServices;

public class ItemService : IItemService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;

    public ItemService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<List<ItemDTO>> GetAllItems()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var items = await context.Items.ToListAsync();

        if (items == null)
        {
            return new List<ItemDTO>();
        }

        return items.Select(x => x.ToDTO()).ToList();
    }

    public async Task<List<ItemDTO>> GetAllItemsBySlotType(string slotType)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var items = await context.Items
            .Where(x => x.Slot ==  slotType)
            .ToListAsync();

        if (items == null)
        {
            return new List<ItemDTO>();
        }

        return items.Select(x => x.ToDTO()).ToList();   
    }

    public async Task<ItemDTO> GetItemById(int itemId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var item = await context.Items
            .Where(x => x.Id == itemId)
            .FirstOrDefaultAsync();

        if (item == null)
        {
            return new ItemDTO();
        }

        return item.ToDTO();
    }

    public async Task<ItemDTO> GetItemByName(string itemName)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var item = await context.Items
            .Where(x => x.ItemName == itemName)
            .FirstOrDefaultAsync();

        if (item == null)
        {
            return new ItemDTO();
        }

        return item.ToDTO();
    }
}
