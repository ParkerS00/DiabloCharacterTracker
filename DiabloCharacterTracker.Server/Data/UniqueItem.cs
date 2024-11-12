using System.Text.Json.Serialization;

namespace DiabloCharacterTracker.Server.Data;

public class UniqueItem
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }

    [JsonPropertyName("flavor")]
    public string? Flavor { get; set; } 

    [JsonPropertyName("class")]
    public string? CharacterClass { get; set; }

    [JsonPropertyName("slot")]
    public string? Slot { get; set; }

    [JsonPropertyName("name")]
    public string? Name { get; set; }

    [JsonPropertyName("type")]
    public string? Type { get; set; }

    [JsonPropertyName("mythic")]
    public bool Mythic { get; set; }

    [JsonPropertyName("affixes")]
    public List<string> Affixes { get; set; } = new List<string>();

    [JsonPropertyName("active")]
    public bool Active { get; set; }

    [JsonPropertyName("power")]
    public string? Power { get; set; }

    [JsonPropertyName("image_url")]
    public string? ImageUrl { get; set; }
}
