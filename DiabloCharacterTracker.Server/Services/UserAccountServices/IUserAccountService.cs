using DiabloCharacterTracker.Server.DTOs;

namespace DiabloCharacterTracker.Server.Services.UserAccountServices;

public interface IUserAccountService
{
    public Task<UserAccountDTO> GetUserById(int userId);
    public Task<UserAccountDTO> GetUserByEmail(string email);
    public Task<int> AddUser();
}
