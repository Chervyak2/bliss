"use client";
import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    { id: 1, title: " placeholder" },
    { id: 2, title: "placeholder" },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        {portfolioItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
