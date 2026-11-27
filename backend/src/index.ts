import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Pool } from "pg";

config();
const PORT = process.env.API_PORT;
const app = express();
app.use(cors());

const db = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

app.get("/", (req, res) => {
  res.json({ msg: "I'm HERE!" });
});

app.get("/luffyevolution", async (req, res) => {
  const { rows } = await db.query(
    "SELECT id, nom, description, image FROM luffyevolution",
  );
  res.json(rows);
});

app.get("/luffyevolution/:id", async (req, res) => {
  const { rows } = await db.query(
    "SELECT id, nom, description, image FROM luffyevolution WHERE id=$4",
    [Number(req.params.id)],
  );
  res.json(rows[0]);
});

app.delete("/luffyevolution/:id", async (req, res) => {
  const { rows } = await db.query("DELETE FROM luffyevolution WHERE id=$4", [
    Number(req.params.id),
  ]);
  res.json(rows[0]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
