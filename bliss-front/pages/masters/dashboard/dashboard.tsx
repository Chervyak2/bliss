const MasterDashboard = () => {
    const appointments = [
      { id: 1, client: 'Alice', service: 'Haircut', time: '2024-12-25 10:00' },
      { id: 2, client: 'Bob', service: 'Massage', time: '2024-12-25 12:00' },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-xl">Manage Appointments</h2>
        <div>
          {appointments.map((appointment) => (
            <div key={appointment.id} className="border-b py-2">
              <p>Client: {appointment.client}</p>
              <p>Service: {appointment.service}</p>
              <p>Time: {appointment.time}</p>
              <button>Accept</button>
              <button>Reject</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MasterDashboard;
  