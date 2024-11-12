using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class Item
{
    public int Id { get; set; }

    public string? ItemName { get; set; }

    public string? Slot { get; set; }

    public bool? IsMythic { get; set; }
    public string? SlotType { get; set; }
    public string? ImageUrl { get; set; }   

    public virtual ICollection<CharacterItem> CharacterItems { get; set; } = new List<CharacterItem>();

    public virtual ICollection<ItemAffix> ItemAffixes { get; set; } = new List<ItemAffix>();
}
