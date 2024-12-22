using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Models;
using Data;
using Humanizer;
using Microsoft.CodeAnalysis.Elfie.Extensions;

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

/*
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    SeedDatabase(services);
}


static void SeedDatabase(IServiceProvider services)
{
    using var context = services.GetRequiredService<SalonDbContext>();

    if (!context.Users.Any())
    {
        context.Users.AddRange(
            new User { Name = "Alice Johnson", Email = "alice@example.com", Role = "Customer", Password = "password123" },
            new User { Name = "Bob Smith", Email = "bob@example.com", Role = "Master", Password = "password123" },
            new User { Name = "Admin User", Email = "admin@example.com", Role = "Admin", Password = "adminpass" }
        );
        context.SaveChanges();
    }

    if (!context.Services.Any())
    {
        context.Services.AddRange(
            new Service { Name = "Haircut", Description = "Basic haircut service", Price = 20.00m, Duration = 30 },
            new Service { Name = "Manicure", Description = "Nail grooming and polish", Price = 25.00m, Duration = 45 }
        );
        context.SaveChanges();
    }

    if (!context.Schedules.Any())
    {
        context.Schedules.AddRange(
            new Schedule 
            { 
                MasterId = 2, 
                AvailableDate = DateTime.UtcNow.Date, 
                StartTime = TimeSpan.FromHours(9), 
                EndTime = TimeSpan.FromHours(17) 
            },
            new Schedule 
            { 
                MasterId = 2, 
                AvailableDate = DateTime.UtcNow.Date.AddDays(1), 
                StartTime = TimeSpan.FromHours(9), 
                EndTime = TimeSpan.FromHours(17) 
            }
        );
        context.SaveChanges();
    }

    if (!context.Appointments.Any())
    {
        context.Appointments.AddRange(
            new Appointment 
            { 
                UserId = 1, 
                MasterId = 2, 
                ServiceId = 1, 
                Date = DateTime.UtcNow.AddHours(2), 
                Status = "Pending" 
            },
            new Appointment 
            { 
                UserId = 1, 
                MasterId = 2, 
                ServiceId = 2, 
                Date = DateTime.UtcNow.AddDays(1).AddHours(3), 
                Status = "Accepted" 
            }
        );
        context.SaveChanges();
    }
}
*/



app.Run();

