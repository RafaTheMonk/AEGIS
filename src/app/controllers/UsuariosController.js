import conexao from "../database/conexao.js";

class UsuariosController {
    index(req, res) {
      const sql = "SELECT * FROM usuarios;";
      conexao.query(sql, (error, results) => {
        if (error) {
          res.status(404).json({ error: error });
        } else {
          res.status(200).json(results);
        }
      });
    }
  
    show(req, res) {
      const id = req.params.id;
      const sql = "SELECT * FROM usuarios WHERE id=?;";
      conexao.query(sql, id, (error, results) => {
        const linha = results[0];
        if (error) {
          res.status(404).json({ error: error });
        } else {
          res.status(200).json(linha);
        }
      });
    }
  
    store(req, res) {
      const usuario = req.body;
      const sql = "INSERT INTO usuarios SET ?;";
      conexao.query(sql, usuario, (error, results) => {
        if (error) {
          res.status(404).json({ error: error });
        } else {
          res.status(201).json(results);
        }
      });
    }
  
    update(req, res) {
      const id = req.params.id;
      const usuario = req.body;
      const sql = "UPDATE usuarios SET ? WHERE id=?;";
      conexao.query(sql, [usuario, id], (error, results) => {
        if (error) {
          res.status(404).json({ error: error });
        } else {
          res.status(201).json(results);
        }
      });
    }
  
    delete(req, res) {
      const id = req.params.id;
      const sql = "DELETE FROM usuarios WHERE id=?;";
      conexao.query(sql, id, (error, results) => {
        if (error) {
          res.status(404).json({ error: error });
        } else {
          res.status(200).json(results);
        }
      });
    }
  }
  
  //Padrão Singleton
  export default new UsuariosController();
  