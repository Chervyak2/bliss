import type { NextApiRequest, NextApiResponse } from "next";

interface Service {
  id: number;
  name: string;
  price: string;
}

const services: Service[] = [
  { id: 1, name: "Haircut", price: "$20" },
  { id: 2, name: "Manicure", price: "$15" },
  { id: 3, name: "Pedicure", price: "$18" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Service[]>
) {
  res.status(200).json(services);
}
