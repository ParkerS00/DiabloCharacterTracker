using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs.Converters;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace DiabloCharacterTracker.Server.Services.SeedingServices;

public class DiabloApiSkill
{
    public string? id { get; set; }
    public string? name { get; set; }
    public int max_points { get; set; }
    public List<string>? connections { get; set; }
    public List<string>? tags { get; set; }
    public string? description { get; set; }
    public string? image_url { get; set; }
}

public class SkillsSeedingService
{
    private readonly IDbContextFactory<DiabloDbContext>? dbContextFactory;
    private readonly IHttpClientFactory? _httpClientFactory;

    public SkillsSeedingService(IDbContextFactory<DiabloDbContext> dbContextFactory, IHttpClientFactory httpClientFactory)
    {
        this.dbContextFactory = dbContextFactory;
        this._httpClientFactory = httpClientFactory;
    }

    public async Task SeedSkillsAsync(string apiEndpoint)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();
        try
        {
            var httpClient = _httpClientFactory.CreateClient();
            var response = await httpClient.GetStringAsync(apiEndpoint);

            var apiSkills = JsonSerializer.Deserialize<List<DiabloApiSkill>>(response);

            if (apiSkills != null && apiSkills.Any())
            {
                foreach (var apiSkill in apiSkills)
                {
                    var skill = new Skill
                    {
                        SkillName = apiSkill.name ?? apiSkill.id,
                        MaxPointsAlloted = apiSkill.max_points,
                        Description = apiSkill.description,
                        ImageUrl = apiSkill.image_url,
                        ClassName = "rogue",
                        IsPassive = false,
                        IsUltimate = false,
                    };

                    context.Skills.Add(skill);
                    await context.SaveChangesAsync();
                }
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message, ex);
        }
    }
}
