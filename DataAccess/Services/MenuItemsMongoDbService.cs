using DataAccess.Data;
using DataAccess.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace DataAccess.Services;
public class MenuItemsMongoDbService : IMenuItemsService
{
    private readonly IMongoCollection<MenuItemBase> _menuItems;
    private readonly IMongoDatabase _db;
    private readonly IOptions<PizzaStopDBConfig> _dbConfig;

    public MenuItemsMongoDbService(IOptions<PizzaStopDBConfig> dbConfig, MongoClient client)
    {
        _dbConfig = dbConfig;

        _db = client.GetDatabase(dbConfig.Value.DatabaseName);
        _menuItems = _db.GetCollection<MenuItemBase>(dbConfig.Value.CollectionName);
    }

    public async Task<List<MenuItemBase>> GetMenuItems()
    {
        var result = (await _menuItems.FindAsync(x => true)).ToList();
        return result;
    }

    public async Task<MenuItemBase> GetMenuItemById(Guid id)
    {
        return (await _menuItems.FindAsync(x => x.Id == id)).FirstOrDefault();
    }

    public async Task<bool> EditMenuItem(Guid id, MenuItemBase menuItem)
    {
        var result = await _menuItems.ReplaceOneAsync(x => x.Id == id, menuItem);
        return result.IsAcknowledged;
    }

    public async Task<bool> AddMenuItem(MenuItemBase menuItem)
    {
        menuItem.Id = new Guid();
        var addItemTask = _menuItems.InsertOneAsync(menuItem);
        await addItemTask;
        return addItemTask.IsCompletedSuccessfully;
    }

    public async Task<bool> DeleteMenuItem(Guid id)
    {
        var deleteItemTask = _menuItems.DeleteOneAsync(x => x.Id == id);
        await deleteItemTask;
        return deleteItemTask.IsCompletedSuccessfully;
    }
}
