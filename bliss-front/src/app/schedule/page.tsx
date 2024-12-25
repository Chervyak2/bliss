"use client";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

interface Schedule {
  id: number;
  availableDate: string;
  startTime: string;
  endTime: string;
  masterId: number;
}

const Schedule = () => {
  const [data, setData] = useState<Schedule[]>([]);

  useEffect(() => {
    api
      .get("/Schedules")
      .then((response) => {
        console.log("API Response:", response.data); // Debug response
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching schedule:", error);
      });
  }, []);

  return (
    <div>
      <h1>Schedule</h1>
      {data.length === 0 ? (
        <p>No schedules available.</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              Date: {new Date(item.availableDate).toLocaleDateString()} <br />
              Time: {item.startTime} - {item.endTime} <br />
              Master ID: {item.masterId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Schedule;
