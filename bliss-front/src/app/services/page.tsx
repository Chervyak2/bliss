// ServicesPage.tsx
"use client";

import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../context/authContext"; // Use the useAuth hook to access token/role

interface Service {
  id: number;
  name: string;
  price: number;
}

const ServicesPage = () => {
  const { token, role } = useAuth(); // Get token and role from context
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    if (!token) {
      // If the user is not logged in, we could show a login prompt or redirect
      console.log("User is not logged in");
      return;
    }

    // Fetch services only if the user is logged in
    api
      .get("/Services", {
        headers: { Authorization: `Bearer ${token}` }, // Add the token to the headers
      })
      .then((response) => {
        setServices(response.data); // Set the fetched services
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, [token]);

  return (
    <div>
      <h1>Services</h1>

      {!token && (
        <p>Please log in to view services.</p> // Show login prompt if not logged in
      )}

      {token && services.length === 0 && (
        <p>No services available.</p> // Show message if no services are available
      )}

      {token && services.length > 0 && (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <strong>{service.name}</strong> - ${service.price}
            </li>
          ))}
        </ul>
      )}

      {role === "Admin" && (
        <div>
          <button onClick={() => alert("Add new service functionality")}>
            Add New Service
          </button>
          {/* Only show the add service button if the user is an Admin */}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
