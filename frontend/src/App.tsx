import { useEffect, useState } from "react";

type luffytheque = {
  id: number;
  name: string;
};

function App() {
  const [luffytheques, setLuffytheque] = useState<luffytheque[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawdata = await fetch("http://localhost:5173/luffytheque");
      const data = await rawdata.json();
      setLuffytheque(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Luffytheque</h1>
      <ul>
        {luffytheques.map((luffytheque) => (
          <li key={luffytheque.id}>{luffytheque.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
