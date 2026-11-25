import { useEffect, useState } from "react";

type luffytheque = {
  id: number;
  name: string;
  description: string;
  image: string;
};

function App() {
  const [evolutions, setluffytheque] = useState<luffytheque[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawdata = await fetch("http://localhost:5173/luffytheque");
      const data = await rawdata.json();
      setluffytheque(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Luffytheque</h1>
      <ul>
        {evolutions.map((luffytheque) => (
          <li key={luffytheque.id}>{luffytheque.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
