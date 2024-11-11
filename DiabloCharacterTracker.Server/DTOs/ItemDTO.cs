namespace DiabloCharacterTracker.Server.DTOs;

public class ItemDTO
{
    public int Id { get; set; } 
    public string? Name { get; set; }
    public string? Slot { get; set; }
    public bool? IsMythic { get; set; }  
}
