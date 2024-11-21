namespace DiabloCharacterTracker.Server.DTOs;

public class CharacterSkillDTO
{
    public int Id {  get; set; }
    public int? SkillId { get; set; }
    public int? PlayableCharacterId { get; set; }
}
