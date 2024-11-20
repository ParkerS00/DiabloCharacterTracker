namespace DiabloCharacterTracker.Server.DTOs;

public class CharacterClassDTO
{
    public int Id { get; set; } 
    public string? ClassName { get; set; }  
    public string? Description { get; set; }
    public string? Resource {  get; set; }
    public int? ItemSlots { get; set; } 
    public string? ImageUrl { get; set; }
}
