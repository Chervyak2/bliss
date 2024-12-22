namespace Models
{
    public class Schedule
    {
        public int Id { get; set; }
        public DateTime AvailableDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public int MasterId { get; set; }
    }
}