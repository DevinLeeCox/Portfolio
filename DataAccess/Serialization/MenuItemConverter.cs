using System.Text.Json;
using System.Text.Json.Serialization;
using DataAccess.Models;
using DataAccess.Models.Enumeration;

namespace API.JsonSerialization;

public class MenuItemConverter : JsonConverter<MenuItemBase>
{
    public override MenuItemBase Read(
    ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        Utf8JsonReader readerClone = reader;

        if (readerClone.TokenType != JsonTokenType.StartObject)
        {
            throw new JsonException();
        }

        readerClone.Read();
        if (readerClone.TokenType != JsonTokenType.PropertyName)
        {
            throw new JsonException();
        }

        string? propertyName = readerClone.GetString();
        if (propertyName != "typeDiscriminator")
        {
            throw new JsonException();
        }

        readerClone.Read();        
        if (readerClone.TokenType != JsonTokenType.Number)
        {
            throw new JsonException();
        }       

        MenuItemTypeDiscriminator typeDiscriminator = (MenuItemTypeDiscriminator)readerClone.GetInt32();
        MenuItemBase menuItem = typeDiscriminator switch
        {
            MenuItemTypeDiscriminator.BasicMenuItem => JsonSerializer.Deserialize<BasicMenuItem>(ref reader, options)!,
            MenuItemTypeDiscriminator.PizzaMenuItem => JsonSerializer.Deserialize<PizzaMenuItem>(ref reader, options)!,
            MenuItemTypeDiscriminator.ToppingMenuItem => JsonSerializer.Deserialize<ToppingMenuItem>(ref reader, options)!,
            _ => throw new JsonException()
        };
        return menuItem;
    }

    public override void Write(
    Utf8JsonWriter writer,
    MenuItemBase objectToWrite,
    JsonSerializerOptions options) =>
    JsonSerializer.Serialize(writer, objectToWrite, objectToWrite.GetType(), options);
}