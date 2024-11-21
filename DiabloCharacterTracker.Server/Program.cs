using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.Services.AffixServices;
using DiabloCharacterTracker.Server.Services.CharacterItemServices;
using DiabloCharacterTracker.Server.Services.CharacterSkillServices;
using DiabloCharacterTracker.Server.Services.CharaterClassServices;
using DiabloCharacterTracker.Server.Services.ItemAffixServices;
using DiabloCharacterTracker.Server.Services.ItemServices;
using DiabloCharacterTracker.Server.Services.PlayableCharacterServices;
using DiabloCharacterTracker.Server.Services.SeedingServices;
using DiabloCharacterTracker.Server.Services.SkillServices;
using DiabloCharacterTracker.Server.Services.UserAccountServices;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<ISkillService, SkillService>();
builder.Services.AddSingleton<ICharacterClassService, CharacterClassService>();
builder.Services.AddSingleton<IUserAccountService, UserAccountService>();
builder.Services.AddSingleton<IPlayableCharacterService, PlayableCharacterService>();
builder.Services.AddSingleton<IItemService, ItemService>(); 
builder.Services.AddSingleton<IAffixService, AffixService>();
builder.Services.AddSingleton<IItemAffixService, ItemAffixService>();
builder.Services.AddSingleton<ICharacterItemService, CharacterItemService>();
builder.Services.AddSingleton<ICharacterSkillService, CharacterSkillService>();

builder.Services.AddScoped<ItemSeedingService>();
builder.Services.AddScoped<SkillsSeedingService>();

builder.Services.AddHttpClient();

builder.Services.AddDbContextFactory<DiabloDbContext>(config => config.UseNpgsql(builder.Configuration.GetConnectionString("diablodb"), builder =>
{
    builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
}));


builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidIssuer = "https://auth.snowse.duckdns.org/realms/advanced-frontend",
        ValidAudience = "Parker-Final",
    };

    options.Authority = "https://auth.snowse.duckdns.org/realms/advanced-frontend";
});


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy =>
        {
            policy.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
