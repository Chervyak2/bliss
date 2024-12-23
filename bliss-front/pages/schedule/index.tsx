import { useState, useEffect } from 'react';

const Schedule = () => {
  const [services, setServices] = useState([]);
  const [masters, setMasters] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');

  useEffect(() => {
    // Fetch services and masters (use mock data for now)
    setServices([{ id: 1, name: 'Haircut' }, { id: 2, name: 'Massage' }]);
    setMasters([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">Schedule an Appointment</h2>
      <form>
        <label>Select Service</label>
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          {services.map((service) => (
            <option key={service.id} value={service.name}>{service.name}</option>
          ))}
        </select>

        <label>Select Master</label>
        <select value={selectedMaster} onChange={(e) => setSelectedMaster(e.target.value)}>
          {masters.map((master) => (
            <option key={master.id} value={master.name}>{master.name}</option>
          ))}
        </select>

        <label>Select Date & Time</label>
        {/* You can add a calendar component here for date selection */}
        <input type="datetime-local" />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Schedule;
