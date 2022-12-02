namespace DataAccess.Models;
public class PizzaMenuItem : MenuItemBase
{
    public decimal Price { get; set; }
    public List<ToppingMenuItem> Toppings { get; set; }
}
