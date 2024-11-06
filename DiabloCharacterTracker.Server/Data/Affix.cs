using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class Affix
{
    public int Id { get; set; }

    public string? AffixName { get; set; }

    public string? AffixLabel { get; set; }

    public virtual ICollection<ItemAffix> ItemAffixes { get; set; } = new List<ItemAffix>();
}
