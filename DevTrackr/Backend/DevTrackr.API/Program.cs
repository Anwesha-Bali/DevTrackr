var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseInMemoryDatabase("TaskList")); // swap for SQL Server later

var app = builder.Build();
app.MapControllers();
app.Run();