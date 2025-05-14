// src/routes/pokemon.routes.ts
import { Router } from "express";
import { getAllPokemon, createPokemon } from "../controllers/pokemon.controller";

const router = Router();

// Route pour récupérer tous les Pokémon
router.get("/", getAllPokemon);

// Route pour créer un nouveau Pokémon
router.post("/", createPokemon);

export default router;
