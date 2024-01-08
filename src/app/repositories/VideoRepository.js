import conexao from "../database/conexao.js";

class VideoRepository {
  create() {}

  findAll() {
    const sql = "SELECT * FROM videos;";
    conexao.query(sql, (error, results) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(results);
      }
    });
  }

  findById() {
    const id = req.params.id;
    const sql = "SELECT * FROM videos WHERE id=?;";
    conexao.query(sql, id, (error, results) => {
      const linha = results[0];
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(linha);
      }
    });
  }

  update() {}

  delete() {}
}

export default new VideoRepository();
