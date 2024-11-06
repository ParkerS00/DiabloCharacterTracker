using System;
using System.Collections.Generic;

namespace DiabloCharacterTracker.Server.Data;

public partial class UserAccount
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public virtual ICollection<PlayableCharacter> PlayableCharacters { get; set; } = new List<PlayableCharacter>();
}
