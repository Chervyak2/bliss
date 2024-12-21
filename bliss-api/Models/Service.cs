namespace Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } // Optional
        public decimal Price { get; set; }
        public int Duration { get; set; } // Duration in minutes

        // Navigation Properties
        public ICollection<Appointment> Appointments { get; set; }
    }
}
