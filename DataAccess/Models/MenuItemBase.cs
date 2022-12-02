using MongoDB.Bson.Serialization.Attributes;

namespace DataAccess.Models;

[BsonKnownTypes(typeof(BasicMenuItem), typeof(PizzaMenuItem), typeof(ToppingMenuItem))]
public abstract class MenuItemBase
{
    public int TypeDiscriminator { get; set; }
    [BsonId]
    public Guid Id { get; set; }    
    public string Category { get; set; }
    public string Name { get; set; }
    public string Description { get; set; } 
}
