"use client";

export default function Portfolio() {
  const portfolioItems = [
    { id: 1, title: "Hair Styling", imageUrl: "/images/hair-styling.jpg" },
    { id: 2, title: "Nail Art", imageUrl: "/images/nail-art.jpg" },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        {portfolioItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.imageUrl} alt={item.title} width={200} />
          </div>
        ))}
      </div>
    </div>
  );
}
