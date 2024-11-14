using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class Skill
{
    public int Id { get; set; }

    public string? SkillName { get; set; }

    public int? MaxPointsAlloted { get; set; }

    public string? Description { get; set; }

    public bool? IsUltimate { get; set; }

    public bool? IsPassive { get; set; }

    public string? ImageUrl {  get; set; }
    public string? ClassName { get; set; }

    public virtual ICollection<CharacterSkill> CharacterSkills { get; set; } = new List<CharacterSkill>();
}
