using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests;

namespace DiabloCharacterTracker.Server.Services.UserAccountServices;

public interface IUserAccountService
{
    public Task<UserAccountDTO> GetUserById(int userId);
    public Task<UserAccountDTO> GetUserByRequest(GetUserAccountRequest request);
    public Task<int> AddUser(AddUserAccountRequest request);
    public Task<bool> DeleteUser(int userId);
}
