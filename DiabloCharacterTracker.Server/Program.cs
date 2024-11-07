using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.Services.SkillServices;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<ISkillService, SkillService>();

builder.Services.AddDbContextFactory<DiabloDbContext>(config => config.UseNpgsql(builder.Configuration.GetConnectionString("diablodb"), builder =>
{
    builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
}));

builder.Services.AddCors();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
