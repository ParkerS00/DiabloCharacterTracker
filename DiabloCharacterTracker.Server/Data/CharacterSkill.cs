using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class CharacterSkill
{
    public int Id { get; set; }

    public int? SkillId { get; set; }

    public int? PlayableCharacterId { get; set; }

    public virtual PlayableCharacter? PlayableCharacter { get; set; }

    public virtual Skill? Skill { get; set; }
}
