using DataAccess.Models;

namespace DataAccess.Services;
public interface IMenuItemsService
{
    Task<bool> AddMenuItem(MenuItemBase menuItem);
    Task<bool> DeleteMenuItem(Guid id);
    Task<bool> EditMenuItem(Guid id, MenuItemBase menuItem);
    Task<MenuItemBase> GetMenuItemById(Guid id);
    Task<List<MenuItemBase>> GetMenuItems();
}