using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.UpdateRequests;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Services.PlayableCharacterServices;

public class PlayableCharacterService : IPlayableCharacterService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;

    public PlayableCharacterService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<int> AddCharacter(AddPlayableCharacterRequest request)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var possibleCharacter = await context.PlayableCharacters
            .Where(x => x.Name == request.Name!.ToLower())
            .Where(x => x.CharacterClassId == request.ClassId)
            .Where(x => x.UserAccountId == request.UserAccountId)
            .FirstOrDefaultAsync();

        if (possibleCharacter != null)
        {
            return 0;
        }

        PlayableCharacter newCharacter = new PlayableCharacter()
        {
            CharacterClassId = request.ClassId,
            Name = request.Name,
            UserAccountId = request.UserAccountId,
        };

        if (newCharacter == null)
        {
            return 0;
        }

        await context.PlayableCharacters.AddAsync(newCharacter);
        await context.SaveChangesAsync();
        return newCharacter.Id;
    }

    public async Task<bool> DeleteCharacter(int characterId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterToDelete = await context.PlayableCharacters
            .Where(x => x.Id == characterId)
            .FirstOrDefaultAsync();

        if (characterToDelete == null)
        {
            return false;
        }

        context.PlayableCharacters.Remove(characterToDelete);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<PlayableCharacterDTO> GetCharachterById(int characterId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var character = await context.PlayableCharacters
            .Include(x => x.CharacterClass)
            .Include(x => x.UserAccount)
            .Where(x => x.Id == characterId)
            .FirstOrDefaultAsync();

        if (character == null)
        {
            return new PlayableCharacterDTO();
        }

        return character.ToDTO();
    }

    public async Task<PlayableCharacterDTO> UpdateCharacter(UpdatePlayableCharacterRequest request)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var characterUnderChange = await context.PlayableCharacters
            .Include(x => x.CharacterClass)
            .Include(x => x.UserAccount)
            .Where(x => x.Id == request.Id)
            .FirstOrDefaultAsync();

        if (characterUnderChange == null)
        {
            return new PlayableCharacterDTO();
        }

        characterUnderChange.Name = request.Name;

        context.Update(characterUnderChange);
        await context.SaveChangesAsync();   
        return characterUnderChange.ToDTO();
    }
}
