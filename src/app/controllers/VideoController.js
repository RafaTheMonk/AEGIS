import conexao from "../database/conexao.js";
import VideoRepository from "../repositories/VideoRepository.js";

class VideoController {
  
  index(req, res) {
    const row = VideoRepository.findAll()
    res.json(row)
  }

  show(req, res) {
    
  }

  store(req, res) {
    const video = req.body;
    const sql = "INSERT INTO videos SET ?;";
    conexao.query(sql, video, (error, results) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(201).json(results);
      }
    });
  }

  update(req, res) {
    const id = req.params.id;
    const video = req.body;
    const sql = "UPDATE videos SET ? WHERE id=?;";
    conexao.query(sql, [video, id], (error, results) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(201).json(results);
      }
    });
  }

  delete(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM videos WHERE id=?;";
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
export default new VideoController();
