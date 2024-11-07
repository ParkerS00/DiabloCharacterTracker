using DiabloCharacterTracker.Server.Data;

namespace DiabloCharacterTracker.Server.DTOs;

public static class DTOConverter
{
    public static SkillDTO ToDTO(this Skill skill)
    {
        if (skill == null)
        {
            return new SkillDTO();
        }

        return new SkillDTO()
        {
            Id = skill.Id,
            Description = skill.Description,
            IsPassive = skill.IsPassive,
            IsUltimate = skill.IsUltimate,
            MaxPointsAlloted = skill.MaxPointsAlloted,
            SkillName = skill.SkillName 
        };
    }
}
