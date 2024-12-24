"use client";

export default function Services() {
  const services = [
    { id: 1, name: "Haircut", price: "$20" },
    { id: 2, name: "Manicure", price: "$15" },
    { id: 3, name: "Pedicure", price: "$18" },
  ];

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - {service.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
