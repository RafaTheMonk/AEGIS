import { Router } from "express";
import VideoController from "./app/controllers/VideoController.js";
import UsuariosController from "./app/controllers/UsuariosController.js";

const router = Router();

// Create
router.post("/videos", VideoController.store);
router.post("/usuarios", UsuariosController.store);
// Read
router.get("/videos", VideoController.index);
router.get("/usuarios", UsuariosController.index);
// Read por ID
router.get("/videos/:id", VideoController.show);
router.get("/usuarios/:id", UsuariosController.show);
//Update
router.put("/videos/:id", VideoController.update);
router.put("/usuarios/:id", UsuariosController.update);
// Delete
router.delete("/videos/:id", VideoController.delete);
router.delete("/usuarios/:id", UsuariosController.delete);

export default router;
