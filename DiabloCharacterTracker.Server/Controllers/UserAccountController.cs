using DiabloCharacterTracker.Server.DTOs;
using DiabloCharacterTracker.Server.Requests.AddRequests;
using DiabloCharacterTracker.Server.Requests.GetRequests;
using DiabloCharacterTracker.Server.Services.UserAccountServices;
using Microsoft.AspNetCore.Mvc;

namespace DiabloCharacterTracker.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class UserAccountController : Controller
{
    private readonly IUserAccountService userAccountService;

    public UserAccountController(IUserAccountService userAccountService)
    {
        this.userAccountService = userAccountService;   
    }

    [HttpPost("adduser")]
    public async Task<int> AddUser(AddUserAccountRequest request)
    {
        return await userAccountService.AddUser(request);   
    }

    [HttpPost("getuserbyrequest")]
    public async Task<UserAccountDTO> GetUserByRequest(GetUserAccountRequest request)
    {
        return await userAccountService.GetUserByRequest(request);
    }

    [HttpGet("getuserbyid")]
    public async Task<UserAccountDTO> GetUserById(int userId)
    {
        return await userAccountService.GetUserById(userId);
    }

    [HttpDelete("deleteuser")]
    public async Task<bool> DeleteUser(int userId)
    {
        return await userAccountService.DeleteUser(userId);
    }
}
