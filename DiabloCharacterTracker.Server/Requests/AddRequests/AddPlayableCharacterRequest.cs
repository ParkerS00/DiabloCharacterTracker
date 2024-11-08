namespace DiabloCharacterTracker.Server.Requests.AddRequests;

public class AddPlayableCharacterRequest
{
    public string? Name { get; set; }
    public int ClassId { get; set; }
    public int UserAccountId { get; set; }
}
