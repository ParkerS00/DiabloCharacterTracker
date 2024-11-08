using DiabloCharacterTracker.Server.Data;
using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.GetRequests;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Services.UserAccountServices;

public class UserAccountService : IUserAccountService
{
    private readonly IDbContextFactory<DiabloDbContext> dbContextFactory;

    public UserAccountService(IDbContextFactory<DiabloDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<int> AddUser(AddUserAccountRequest request)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var possibleUser = await context.UserAccounts
            .Where(x => x.FirstName == request.FirstName!.ToLower())
            .Where(x => x.LastName == request.LastName!.ToLower())
            .Where(x => x.Email == request.Email!.ToLower())
            .FirstOrDefaultAsync();

        if (possibleUser != null)
        {
            return 0;
        }

        UserAccount newUser = new UserAccount()
        {
            Email = request.Email!.ToLower(),
            FirstName = request.FirstName!.ToLower(),
            LastName = request.LastName!.ToLower(),
        };

        await context.UserAccounts.AddAsync(newUser);
        await context.SaveChangesAsync();
        return newUser.Id;
    }

    public async Task<bool> DeleteUser(int userId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var user = await context.UserAccounts
            .Where(x => x.Id == userId)
            .FirstOrDefaultAsync();

        if (user == null)
        {
            return false;
        }

        context.Remove(user);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<UserAccountDTO> GetUserByRequest(GetUserAccountRequest request)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var user = await context.UserAccounts
            .Where(x => x.Email == request.Email!.ToLower()) 
            .FirstOrDefaultAsync();

        if (user == null)
        {
            return new UserAccountDTO();
        }

        return user.ToDTO();
    }

    public async Task<UserAccountDTO> GetUserById(int userId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var user = await context.UserAccounts
            .Where(x => x.Id == userId)
            .FirstOrDefaultAsync();

        if (user == null)
        {
            return new UserAccountDTO();
        }

        return user.ToDTO();
    }
}
