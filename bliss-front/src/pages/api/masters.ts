import type { NextApiRequest, NextApiResponse } from "next";

interface Master {
  id: number;
  name: string;
  expertise: string;
}

const masters: Master[] = [
  { id: 1, name: "Alice", expertise: "Hair Styling" },
  { id: 2, name: "Bob", expertise: "Nail Art" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Master[]>
) {
  res.status(200).json(masters);
}
