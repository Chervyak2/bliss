import type { NextApiRequest, NextApiResponse } from "next";

interface Appointment {
  id: number;
  service: string;
  time: string;
}

let appointments: Appointment[] = [
  { id: 1, service: "Haircut", time: "10:00 AM" },
  { id: 2, service: "Nail Art", time: "12:00 PM" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Appointment[] | { message: string }>
) {
  if (req.method === "GET") {
    res.status(200).json(appointments);
  } else if (req.method === "POST") {
    const newAppointment = req.body as Appointment;
    appointments.push(newAppointment);
    res.status(201).json({ message: "Appointment added successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
