using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class PlayableCharacter
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? CharacterClassId { get; set; }

    public int? UserAccountId { get; set; }

    public virtual CharacterClass? CharacterClass { get; set; }

    public virtual ICollection<CharacterItem> CharacterItems { get; set; } = new List<CharacterItem>();

    public virtual ICollection<CharacterSkill> CharacterSkills { get; set; } = new List<CharacterSkill>();

    public virtual UserAccount? UserAccount { get; set; }
}
