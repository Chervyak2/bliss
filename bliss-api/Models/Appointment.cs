namespace Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
        public int MasterId { get; set; }
        public int ServiceId { get; set; }
        public string Status { get; set; } = "Pending"; // "Pending", "Accepted", "Refused", "Completed"
        public string? Notes { get; set; }
    }

}