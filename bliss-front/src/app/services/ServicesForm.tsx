import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const ServiceForm = ({ service, onSave }: any) => {
  const [name, setName] = useState(service?.name || "");
  const [price, setPrice] = useState(service?.price || "");
  const [duration, setDuration] = useState(service?.duration || "");

  // Reset form state if no service is being edited
  useEffect(() => {
    if (service) {
      setName(service.name);
      setPrice(service.price);
      setDuration(service.duration);
    }
  }, [service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceData = { name, price, duration };

    if (service?.id) {
      // Edit service
      api
        .put(`/Services/${service.id}`, serviceData)
        .then(onSave)
        .catch(console.error);
    } else {
      // Create service
      api.post("/Services", serviceData).then(onSave).catch(console.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{service?.id ? "Edit Service" : "Create Service"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ServiceForm;
