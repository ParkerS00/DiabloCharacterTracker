namespace DiabloCharacterTracker.Server.DTOs;

public class PlayableCharacterDTO
{
    public int Id { get; set; } 
    public string? Name { get; set; }   
    public CharacterClassDTO? CharacterClass { get; set; }
    public UserAccountDTO? UserAccount { get; set; }
}
