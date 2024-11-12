using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs.Converters;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DiabloCharacterTracker.Server.Services.SeedingServices;

public class ItemSeedingService
{
    private readonly IDbContextFactory<DiabloDbContext>? dbContextFactory;
    private readonly IHttpClientFactory? _httpClientFactory;

    public ItemSeedingService(IDbContextFactory<DiabloDbContext> dbContextFactory, IHttpClientFactory httpClientFactory)
    {
        this.dbContextFactory = dbContextFactory;
        this._httpClientFactory = httpClientFactory;   
    }

    public async Task SeedItemsAsync()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();
        try
        {
            var httpClient = _httpClientFactory.CreateClient();
            var response = await httpClient.GetStringAsync("https://d4api.dev/api/uniques");

            var options = new JsonSerializerOptions
            {
                Converters = { new UniqueItemConverter() }
            };

            var items = JsonSerializer.Deserialize<List<UniqueItem>>(response, options);

            foreach (var uniqueItem in items)
            {
                var item = context.Items.FirstOrDefault(x => x.ItemName == uniqueItem.Name);

                if (item == null)
                {
                    item = new Item
                    {
                        ItemName = uniqueItem.Name,
                        Slot = uniqueItem.Type,
                        IsMythic = uniqueItem.Mythic,
                        SlotType = uniqueItem.Slot,
                        ImageUrl = uniqueItem.ImageUrl,
                    };

                    context.Items.Add(item);
                    await context.SaveChangesAsync(); 
                }

                foreach (var affixName in uniqueItem.Affixes)
                {
                    var affix = context.Affixes.FirstOrDefault(a => a.AffixName == affixName);
                    if (affix == null)
                    {
                        affix = new Affix
                        {
                            AffixName = affixName,
                            AffixLabel = affixName 
                        };
                        context.Affixes.Add(affix);
                        await context.SaveChangesAsync(); 
                    }

                    var itemAffixExists = context.ItemAffixes
                        .Any(ia => ia.ItemId == item.Id && ia.AffixId == affix.Id);

                    if (!itemAffixExists)
                    {
                        var itemAffix = new ItemAffix
                        {
                            ItemId = item.Id,
                            AffixId = affix.Id
                        };
                        context.ItemAffixes.Add(itemAffix);
                    }
                }
            }

            await context.SaveChangesAsync();
            Console.WriteLine("Data seeding completed!");
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message, ex);
        }
    }
}
