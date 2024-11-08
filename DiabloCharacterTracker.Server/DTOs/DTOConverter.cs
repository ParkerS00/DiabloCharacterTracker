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

    public static CharacterClassDTO ToDTO(this CharacterClass characterClass)
    {
        if (characterClass == null)
        {
            return new CharacterClassDTO();
        }

        return new CharacterClassDTO()
        {
            ClassName = characterClass.ClassName,
            Description = characterClass.Description,
            Id = characterClass.Id,
            ItemSlots = characterClass.ItemSlots,
            Resource = characterClass.Resource,
        };
    }

    public static UserAccountDTO ToDTO(this UserAccount userAccount)
    {
        if (userAccount == null)
        {
            return new UserAccountDTO();
        }

        return new UserAccountDTO()
        {
            Email = userAccount.Email,
            FirstName = userAccount.FirstName,
            LastName = userAccount.LastName,
            Id = userAccount.Id,    
        };
    }

    public static PlayableCharacterDTO ToDTO(this PlayableCharacter character)
    {
        if (character == null)
        {
            return new PlayableCharacterDTO();
        }

        return new PlayableCharacterDTO()
        {
            CharacterClass = character.CharacterClass!.ToDTO(),
            Id = character.Id,
            Name = character.Name,
            UserAccount = character.UserAccount!.ToDTO(),
        };
    }
}
