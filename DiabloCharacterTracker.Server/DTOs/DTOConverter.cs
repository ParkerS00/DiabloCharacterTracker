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

    public static ItemDTO ToDTO(this Item item)
    {
        if (item == null)
        {
            return new ItemDTO();
        }

        return new ItemDTO()
        { 
            Id = item.Id,
            Name = item.ItemName,
            IsMythic = item.IsMythic,
            Slot = item.Slot,
            ImageUrl = item.ImageUrl,
            SlotType = item.SlotType
        };
    }

    public static AffixDTO ToDTO(this Affix affix) 
    {
        if (affix == null)
        {
            return new AffixDTO();
        }

        return new AffixDTO()
        {
            Id = affix.Id,
            Label = affix.AffixLabel,
            Name = affix.AffixName,
        };
    }

    public static ItemAffixDTO ToDTO(this ItemAffix itemAffix)
    {
        if (itemAffix == null)
        {
            return new ItemAffixDTO();
        }

        return new ItemAffixDTO()
        {
            Id = itemAffix.Id,
            AffixId = itemAffix.AffixId,
            ItemId = itemAffix.ItemId,
        };
    }

    public static CharacterItemDTO ToDTO(this CharacterItem characterItem) 
    { 
        if (characterItem == null)
        {
            return new CharacterItemDTO();
        }

        return new CharacterItemDTO()
        {
            Id = characterItem.Id,
            ItemId = characterItem.ItemId,
            PlayableCharacterId = characterItem.PlayableCharacterId,
        };
    }
}
