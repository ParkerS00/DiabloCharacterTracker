﻿namespace DiabloCharacterTracker.Server.Requests.AddRequests;

public class AddUserAccountRequest
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
}