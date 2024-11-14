using DiabloCharacterTracker.Server.Data;
using System.Text.Json.Serialization;
using System.Text.Json;
using Microsoft.Extensions.Options;

namespace DiabloCharacterTracker.Server.DTOs.Converters;

public class UniqueItemConverter : JsonConverter<UniqueItem>
{
    public override UniqueItem Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var uniqueItem = new UniqueItem();

        while (reader.Read())
        {
            if (reader.TokenType == JsonTokenType.EndObject)
                return uniqueItem;

            if (reader.TokenType == JsonTokenType.PropertyName)
            {
                string propertyName = reader.GetString();
                reader.Read();

                switch (propertyName)
                {
                    case "id":
                        uniqueItem.Id = reader.GetString();
                        break;
                    case "slot":
                        uniqueItem.Slot = reader.GetString();
                        break;
                    case "name":
                        uniqueItem.Name = reader.GetString();
                        break;
                    case "type":
                        uniqueItem.Type = reader.GetString();
                        break;
                    case "mythic":
                        uniqueItem.Mythic = reader.GetBoolean();
                        break;
                    case "affixes":
                        uniqueItem.Affixes = JsonSerializer.Deserialize<List<string>>(ref reader, options);
                        break;
                    case "active":
                        uniqueItem.Active = reader.GetBoolean();
                        break;
                    case "power":
                        uniqueItem.Power = reader.GetString();
                        break;
                    case "image_url":
                        uniqueItem.ImageUrl = reader.GetString();
                        break;
                }
            }
        }

        return uniqueItem;
    }

    public override void Write(Utf8JsonWriter writer, UniqueItem value, JsonSerializerOptions options)
    {
        throw new NotImplementedException();
    }
}