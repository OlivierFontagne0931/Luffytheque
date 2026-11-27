import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { luffytheque } from "../types/luffytheque";

export default function HomePage() {
  const [evolutions, setluffytheque] = useState<luffytheque[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawdata = await fetch("http://localhost:5173/luffyevolution");
      const data = await rawdata.json();
      setluffytheque(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome to the Luffythèque</h1>
      {evolutions.map((luffytheque) => {
        return (
          <p key={luffytheque.id}>
            <Link to={`/${luffytheque.id}`}>{luffytheque.nom}</Link>
          </p>
        );
      })}
    </>
  );
}
