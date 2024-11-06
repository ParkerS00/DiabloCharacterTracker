using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class ItemAffix
{
    public int Id { get; set; }

    public int? ItemId { get; set; }

    public int? AffixId { get; set; }

    public virtual Affix? Affix { get; set; }

    public virtual Item? Item { get; set; }
}
