import express from 'express';
import conexao from './app/database/conexao.js';
import UsuariosController from './app/controllers/UsuariosController.js';
const app = express();

app.use(express.json());

app.post('/usuarios', UsuariosController.store);
app.get('/usuarios', UsuariosController.index);
app.get('/usuarios/:id', UsuariosController.show);
app.put('/usuarios/:id', UsuariosController.update);
app.delete('/usuarios/:id', UsuariosController.delete);

export default app;