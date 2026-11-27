import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { luffytheque } from "../types/luffytheque";
import "./HomePage.css";

export default function HomePage() {
  const [evolutions, setluffytheque] = useState<luffytheque[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawdata = await fetch("http://localhost:5174/luffyevolution");
      const data = await rawdata.json();
      setluffytheque(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="titre">Welcome to the Luffythèque</h1>
      {evolutions.map((luffytheque) => {
        return (
          <p className="evolution" key={luffytheque.id}>
            <Link to={`/${luffytheque.id}`}>{luffytheque.nom}</Link>
          </p>
        );
      })}
    </>
  );
}
