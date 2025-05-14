import { getConnection } from "./db";

export const findAllTypes = async () => {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM types");
  await connection.end();
  return rows;
};

export const findTypeById = async (id: string) => {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM types WHERE id = ?", [id]);
  await connection.end();
  return Array.isArray(rows) ? rows[0] : null;
};
