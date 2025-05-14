import { Request, Response } from "express";
import logger from "../logger";
import { findAllTypes, findTypeById } from "../models/type.model";

// Fonction pour retourner la liste complète des Types de Pokémon
export const getAllTypes = async (req: Request, res: Response) => {
  try {
    const types = await findAllTypes();
    res.status(200).json(types);
  } catch (error) {
    logger.error(`Erreur lors de la récupération des types : ${error}`);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

// Fonction pour retourner les détails d’un Type précis
export const getTypeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const type = await findTypeById(id);
    if (type) {
      res.status(200).json(type);
    } else {
      res.status(404).json({ error: "Type non trouvé" });
    }
  } catch (error) {
    logger.error(`Erreur lors de la récupération du type avec l'id ${id} : ${error}`);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};
