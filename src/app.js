import express from 'express';


import conexao from '../infra/conexao.js';

const app = express();


app.use(express.json());

app.post('/seguranca', (req, res) => {
  const usuario = req.body;

  const sql = "INSERT INTO usuarios SET ?;";

  conexao.query(sql, usuario, (erro, resultado) => {

    if (erro) {
      res.status(400).json({'erro': erro});
    } else {
      res.status(201).json(resultado);
    }
  });
});

app.get('/seguranca', (req, res) => {
  const sql = "SELECT * FROM usuarios;";

  conexao.query(sql, (erro, resultado) => {
    if (erro) {
      res.status(404).json({'erro': erro});
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.get('/seguranca/:id', (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM usuarios WHERE id=?;";

  conexao.query(sql, id, (erro, resultado) => {
    const linha = resultado[0];
    if (erro) {
      res.status(404).json({'erro': erro});
    } else {
      res.status(200).json(linha);
    }
  });
});

app.put('/seguranca/:id', (req, res) => {
  
  const id = req.params.id;

  const usuario = req.body;

  const sql = "UPDATE usuarios SET ? WHERE id=?;";

  conexao.query(sql, [usuario, id], (erro, resultado) => {
    if (erro) {
      res.status(400).json({'erro': erro});
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.delete('/seguranca/:id', (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM usuarios WHERE id=?;";

  conexao.query(sql, id, (erro, resultado) => {

    if (erro) {
      res.status(404).json({'erro': erro});
    } else {
      res.status(200).json(resultado);
    }
  });
});

export default app;