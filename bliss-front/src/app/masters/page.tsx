"use client";

import { useEffect, useState } from "react";

interface Master {
  id: number;
  name: string;
  expertise: string;
}

export default function Masters() {
  const [masters, setMasters] = useState<Master[]>([]);

  useEffect(() => {
    // Placeholder for fetching masters
    setMasters([
      { id: 1, name: "plpacejholder", expertise: "Hair Styling" },
      { id: 2, name: "placeholder", expertise: "Nail Art" },
    ]);
  }, []);

  return (
    <div>
      <h1>Masters</h1>
      <ul>
        {masters.map((master) => (
          <li key={master.id}>
            {master.name} - {master.expertise}
          </li>
        ))}
      </ul>
    </div>
  );
}
