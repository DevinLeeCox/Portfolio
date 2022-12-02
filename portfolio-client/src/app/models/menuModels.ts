export interface MenuItemModel {
  id: String;
  category: String;
  name: String;
  description: String;
  price: Number;
}

export interface PizzaMenuItem extends MenuItemModel {
  toppings?: MenuItemModel[];
}
