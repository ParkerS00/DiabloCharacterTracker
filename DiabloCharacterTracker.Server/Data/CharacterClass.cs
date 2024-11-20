using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class CharacterClass
{
    public int Id { get; set; }

    public string? ClassName { get; set; }

    public string? Description { get; set; }

    public string? Resource { get; set; }

    public int? ItemSlots { get; set; }
    public string? ImageUrl { get; set; }

    public virtual ICollection<PlayableCharacter> PlayableCharacters { get; set; } = new List<PlayableCharacter>();
}
