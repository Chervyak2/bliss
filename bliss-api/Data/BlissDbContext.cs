using Microsoft.EntityFrameworkCore;
using Models;

namespace Data
{
    public class SalonDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Schedule> Schedules { get; set; }

        public SalonDbContext(DbContextOptions<SalonDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Additional constraints and relationships
            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.User)
                .WithMany(u => u.Appointments)
                .HasForeignKey(a => a.UserId);

            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.Master)
                .WithMany()
                .HasForeignKey(a => a.MasterId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
