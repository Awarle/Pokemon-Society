"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/pokemon.routes.ts
const express_1 = require("express");
const pokemon_controller_1 = require("../controllers/pokemon.controller");
const router = (0, express_1.Router)();
// Route pour récupérer tous les Pokémon
router.get("/", pokemon_controller_1.getAllPokemon);
// Route pour créer un nouveau Pokémon
router.post("/", pokemon_controller_1.createPokemon);
exports.default = router;
