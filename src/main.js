"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./logger"));
// Charger les variables d'environnement
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
// Middleware pour parser les JSON
app.use(express_1.default.json());
// Exemple de route simple
app.get("/", (req, res) => {
    res.send("Bienvenue au Pokédex Numérique Ultime de la Pokémon Society !");
});
// Démarrage du serveur
app.listen(PORT, () => {
    logger_1.default.info(`Serveur démarré sur le port ${PORT}`);
    console.log(`Serveur démarré sur le port ${PORT}`);
});
