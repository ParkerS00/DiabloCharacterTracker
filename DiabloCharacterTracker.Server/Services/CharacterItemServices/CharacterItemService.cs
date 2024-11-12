using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Services.CharacterItemServices;

public class CharacterItemService : ICharacterItemService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;
    public CharacterItemService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }
    public async Task<int> AddCharacterItem(AddCharacterItemRequest request)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        CharacterItem newCharacterItem = new CharacterItem()
        {
            ItemId = request.ItemId,
            PlayableCharacterId = request.PlayableCharacterId,
        };

        if (newCharacterItem == null)
        {
            return 0;
        }

        await context.AddAsync(newCharacterItem);
        await context.SaveChangesAsync();
        return newCharacterItem.Id;
    }

    public async Task<bool> DeleteCharacterItem(int characterItemId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterItemToDelete = await context.CharacterItems
            .Where(x => x.Id == characterItemId)
            .FirstOrDefaultAsync();

        if (characterItemToDelete == null)
        {
            return false;
        }

        context.CharacterItems.Remove(characterItemToDelete);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<List<ItemDTO>> GetAllItemsForCharacter(int characterId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var items = await context.CharacterItems
            .Include(x => x.PlayableCharacter)
            .Include(x => x.Item)
            .Where(x => x.PlayableCharacterId == characterId)
            .ToListAsync();

        if (items == null)
        {
            return new List<ItemDTO>();
        }

        return items.Select(x => x.Item!.ToDTO()).ToList();
    }

    public async Task<CharacterItemDTO> GetCharacterItemById(int characterItemId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterItem = await context.CharacterItems
            .Where(x => x.Id == characterItemId)
            .FirstOrDefaultAsync();

        if (characterItem == null)
        {
            return new CharacterItemDTO();
        }

        return characterItem.ToDTO();
    }
}
