import { Router } from "express";
import UsuariosController from "./app/controllers/UsuariosController.js";

const router = Router()

router.post('/usuarios', UsuariosController.store)
router.get('/usuarios', UsuariosController.index)
router.get('/usuarios/:id', UsuariosController.show)
router.put('/usuarios/:id', UsuariosController.update)
router.delete('/usuarios/:id', UsuariosController.delete)

export default router;