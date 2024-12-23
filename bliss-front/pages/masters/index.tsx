import { useEffect, useState } from 'react';

interface Master {
  id: number;
  name: string;
  bio: string;
  photo: string;
}

const MasterList = () => {
  const [masters, setMasters] = useState<Master[]>([]);

  useEffect(() => {
    // Fetch data (use mock data for now)
    setMasters([
      { id: 1, name: 'John Doe', bio: 'Expert in haircuts and styling', photo: 'path/to/photo1.jpg' },
      { id: 2, name: 'Jane Smith', bio: 'Specializes in massages', photo: 'path/to/photo2.jpg' },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">Our Masters</h2>
      <div>
        {masters.map((master) => (
          <div key={master.id} className="border-b py-2">
            <img src={master.photo} alt={master.name} className="w-20 h-20 rounded-full" />
            <h3>{master.name}</h3>
            <p>{master.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterList;
