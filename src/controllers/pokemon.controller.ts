// src/controllers/pokemon.controller.ts
import { Request, Response } from "express";
import logger from "../logger";

// Exemple de fonction pour récupérer tous les Pokémon
export const getAllPokemon = (req: Request, res: Response) => {
  // Ici, vous ajouterez la logique de récupération en interrogeant le modèle (base de données)
  logger.info("Récupération de tous les Pokémon");
  res.json({ message: "Liste de tous les Pokémon" });
};

// Exemple de fonction pour créer un nouveau Pokémon
export const createPokemon = (req: Request, res: Response) => {
  // Vous récupérerez les données depuis req.body et appelerez le modèle pour créer l'entrée
  const nouvelleData = req.body;
  logger.info("Création d'un nouveau Pokémon");
  // Ajoutez ici la logique pour insérer dans la base de données
  res.status(201).json({ message: "Nouveau Pokémon créé", data: nouvelleData });
};
