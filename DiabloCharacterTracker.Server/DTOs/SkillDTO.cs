namespace DiabloCharacterTracker.Server.DTOs;

public class SkillDTO
{
    public int Id { get; set; } 
    public string? SkillName { get; set; }   
    public int? MaxPointsAlloted { get; set; }  
    public string? Description { get; set; } 
    public bool? IsUltimate { get; set; }
    public bool? IsPassive { get; set; }
}
