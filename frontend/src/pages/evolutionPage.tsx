import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { luffytheque } from "../types/luffytheque";

export default function EvolutionPage() {
  const { id } = useParams();

  const [luffytheque, setluffytheque] = useState<luffytheque | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:5173/luffyevolution/${1}`);
      const cleanData = (await rawData.json()) as luffytheque;
      setluffytheque(cleanData);
    }
    fetchData();
  }, []);

  if (luffytheque === null) {
    return <p>Waiting for Luffythèque n°{1}...</p>;
  }

  return (
    <p>
      {luffytheque.nom} (n°{1})
    </p>
  );
}
