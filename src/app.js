import express from "express";
import VideoController from "./app/controllers/VideoController.js";
import UsuariosController from "./app/controllers/UsuariosController.js";
const app = express();

//indicar para o express ler body com json
app.use(express.json());

// Create
app.post("/videos", VideoController.store);
app.post("/usuarios", UsuariosController.store);

// Read
app.get("/videos", VideoController.index);
app.get("/usuarios", UsuariosController.index);

// Read por ID
app.get("/videos/:id", VideoController.show);
app.get("/usuarios/:id", UsuariosController.show);

//Update
app.put("/videos/:id", VideoController.update);
app.put("/usuarios/:id", UsuariosController.update);

// Delete
app.delete("/videos/:id", VideoController.delete);
app.delete("/usuarios/:id", UsuariosController.delete);

export default app;
