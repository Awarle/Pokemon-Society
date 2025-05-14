import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const getConnection = async () => {
  try {
    const connection = await mysql.createConnection(connectionConfig);
    console.log("Connexion réussie à MySQL");
    return connection;
  } catch (error) {
    console.error("Erreur lors de la connexion à MySQL :", error);
    throw error;
  }
};
