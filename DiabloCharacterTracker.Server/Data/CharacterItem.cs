using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class CharacterItem
{
    public int Id { get; set; }

    public int? PlayableCharacterId { get; set; }

    public int? ItemId { get; set; }

    public virtual Item? Item { get; set; }

    public virtual PlayableCharacter? PlayableCharacter { get; set; }
}
