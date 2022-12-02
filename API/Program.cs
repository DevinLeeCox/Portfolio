using API.JsonSerialization;
using DataAccess.Data;
using DataAccess.Services;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton(new MongoClient(builder.Configuration.GetConnectionString("COSMOS_CONNECTION_STRING")));
builder.Services.Configure<PizzaStopDBConfig>(opt =>
{
    opt.DatabaseName = builder.Configuration["APPSETTING_COSMOS_DATABASE_NAME"];
    opt.CollectionName = builder.Configuration["APPSETTING_COSMOS_COLLECTION_NAME"];
});

builder.Services.AddTransient<IMenuItemsService, MenuItemsMongoDbService>();

builder.Services.AddControllers().AddJsonOptions(opt =>
{
    opt.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    opt.JsonSerializerOptions.Converters.Add(new MenuItemConverter());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(opt =>
{    
    opt.UseOneOfForPolymorphism();
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
