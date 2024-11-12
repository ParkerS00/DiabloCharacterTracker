namespace DiabloCharacterTracker.Server.DTOs;

public class ItemDTO
{
    public int Id { get; set; } 
    public string? Name { get; set; }
    public string? Slot { get; set; }
    public bool? IsMythic { get; set; }  
    public string? SlotType { get; set;}
    public string? ImageUrl {  get; set; }  
}
