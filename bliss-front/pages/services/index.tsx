import { useEffect, useState } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ServiceList = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Fetch data from your API (use a mock for now)
    setServices([
      { id: 1, name: 'Haircut', description: 'A basic haircut', price: 25 },
      { id: 2, name: 'Massage', description: 'A relaxing massage', price: 40 },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">Services</h2>
      <div>
        {services.map((service) => (
          <div key={service.id} className="border-b py-2">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p><strong>Price: ${service.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
