// src/models/pokemon.model.ts
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

export const getConnection = async () => {
  return await mysql.createConnection(connectionConfig);
};

// Vous pourrez ajouter ici des fonctions CRUD, par exemple :
export const findAllPokemon = async () => {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM pokemon");
  await connection.end();
  return rows;
};
