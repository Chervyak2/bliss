using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Models;
using Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Beauty Salon API",
        Version = "v1",
        Description = "API documentation for the Beauty Salon system",
        Contact = new OpenApiContact
        {
            Name = "Your Name",
            Email = "your.email@example.com"
        }
    });
});

// Add DbContext with PostgreSQL configuration
builder.Services.AddDbContext<SalonDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure the app
var app = builder.Build();

// Middleware pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Beauty Salon API v1");
        c.RoutePrefix = string.Empty; // Swagger at the root URL
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Seed database with initial data (optional)
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    SeedDatabase(services);
}

app.Run();

// Helper method to seed initial data
void SeedDatabase(IServiceProvider services)
{
    using var context = services.GetRequiredService<SalonDbContext>();
    if (!context.Users.Any())
    {
        context.Users.AddRange(
            new User { Name = "John Doe", Email = "john@example.com", Role = "Customer", Password = "password123" },
            new User { Name = "Jane Smith", Email = "jane@example.com", Role = "Master", Password = "password123" }
        );
        context.SaveChanges();
    }
}
