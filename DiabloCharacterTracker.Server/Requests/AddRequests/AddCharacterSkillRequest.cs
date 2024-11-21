namespace DiabloCharacterTracker.Server.Requests.AddRequests;

public class AddCharacterSkillRequest
{
    public int SkillId { get; set; }    
    public int PlayableCharacterId { get; set; }
}
