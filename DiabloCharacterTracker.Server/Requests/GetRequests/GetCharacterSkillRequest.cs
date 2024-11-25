namespace DiabloCharacterTracker.Server.Requests.GetRequests;

public class GetCharacterSkillRequest
{
    public int PlayableCharacterId { get; set; }
    public int SkillId { get; set; }
}
