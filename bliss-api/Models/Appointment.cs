namespace Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; } // Customer
        public int MasterId { get; set; } // Assigned Master
        public int ServiceId { get; set; } // Booked Service
        public string Status { get; set; } // "Pending", "Accepted", "Refused", "Completed"
        public string Notes { get; set; } // Optional

        // Navigation Properties
        public User User { get; set; }
        public User Master { get; set; }
        public Service Service { get; set; }
    }
}