import { Router } from "express";
import { getAllTypes, getTypeById } from "../controllers/type.controller";

const router = Router();

// Route pour obtenir la liste complète des Types
router.get("/", getAllTypes);

// Route pour obtenir le détail d’un Type (en utilisant l’ID)
router.get("/:id", getTypeById);

export default router;
