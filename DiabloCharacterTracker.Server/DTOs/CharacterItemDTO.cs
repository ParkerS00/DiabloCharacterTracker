namespace DiabloCharacterTracker.Server.DTOs;

public class CharacterItemDTO
{
    public int Id { get; set; } 
    public int? PlayableCharacterId { get; set; }
    public int? ItemId { get; set; } 
}
