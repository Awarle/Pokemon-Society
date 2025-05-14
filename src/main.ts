// src/main.ts
import express from "express";
import dotenv from "dotenv";
import logger from "./logger";

// Importer les routes
import pokemonRoutes from "./routes/pokemon.routes";
import typeRoutes from "./routes/types.routes";
// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware pour parser les JSON
app.use(express.json());

// Monter les routes sur des chemins de base
app.use("/pokemon", pokemonRoutes);
app.use("/types", typeRoutes);

// Exemple de route simple
app.get("/", (req, res) => {
  res.send("Bienvenue au Pokédex Numérique Ultime de la Pokémon Society !");
});

// Démarrage du serveur
app.listen(PORT, () => {
  logger.info(`Serveur démarré sur le port ${PORT}`);
  console.log(`Serveur démarré sur le port ${PORT}`);
});
