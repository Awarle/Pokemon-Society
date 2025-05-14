"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPokemon = exports.getAllPokemon = void 0;
const logger_1 = __importDefault(require("../logger"));
// Exemple de fonction pour récupérer tous les Pokémon
const getAllPokemon = (req, res) => {
    // Ici, vous ajouterez la logique de récupération en interrogeant le modèle (base de données)
    logger_1.default.info("Récupération de tous les Pokémon");
    res.json({ message: "Liste de tous les Pokémon" });
};
exports.getAllPokemon = getAllPokemon;
// Exemple de fonction pour créer un nouveau Pokémon
const createPokemon = (req, res) => {
    // Vous récupérerez les données depuis req.body et appelerez le modèle pour créer l'entrée
    const nouvelleData = req.body;
    logger_1.default.info("Création d'un nouveau Pokémon");
    // Ajoutez ici la logique pour insérer dans la base de données
    res.status(201).json({ message: "Nouveau Pokémon créé", data: nouvelleData });
};
exports.createPokemon = createPokemon;
