using DataAccess.Models;
using DataAccess.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class PizzaStopMenuController : ControllerBase
{
    private readonly IMenuItemsService _menuItems;

    public PizzaStopMenuController(IMenuItemsService menuItems)
    {
        _menuItems = menuItems;
    }
        
    [HttpGet]
    public async Task<ActionResult<List<MenuItemBase>>> Get()
    {
        var result = await _menuItems.GetMenuItems();

        if (result != null)
            return Ok(result);
        return BadRequest();
    }
        
    [HttpGet("{id}")]
    public async Task<ActionResult<MenuItemBase>> Get(Guid id)
    {
        var result = await _menuItems.GetMenuItemById(id);

        if (result != null)
            return Ok(result);
        return BadRequest();
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromBody] MenuItemBase menuItem)
    {
        var result = await _menuItems.AddMenuItem(menuItem);
        return result ? Ok() : BadRequest();
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Put(Guid id, [FromBody] MenuItemBase menuItem)
    {
        var result = await _menuItems.EditMenuItem(id, menuItem);
        return result ? Ok() : BadRequest();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(Guid id)
    {
        var result = await _menuItems.DeleteMenuItem(id);
        return result ? Ok() : BadRequest();
    }
}
