"use client";

import { useState } from "react";

interface Appointment {
  id: number;
  service: string;
  time: string;
}

export default function Schedule() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, service: "Haircut", time: "10:00 AM" },
    { id: 2, service: "Nail Art", time: "12:00 PM" },
  ]);

  return (
    <div>
      <h1>Schedule</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.service} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
