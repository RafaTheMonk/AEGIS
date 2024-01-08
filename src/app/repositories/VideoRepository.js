import { consulta } from "../database/conexao.js";

class VideoRepository {
  create(video) {
    const sql = "INSERT INTO videos SET ?;";
    return consulta(sql, video, "Não foi possível cadastrar!");
  }

  findAll() {
    const sql = "SELECT * FROM videos;";
    return consulta(sql, "Não foi possível localizar!");
  }

  findById(id) {
    const sql = "SELECT * FROM videos WHERE id=?;";
    return consulta(sql, id, "Não foi possível localizar!");
  }

  update(video, id) {
    const sql = "UPDATE videos SET ? WHERE id=?;";
    return consulta(sql, [video, id], "Não foi possível atualizar!");
  }

  delete(id) {
    const sql = "DELETE FROM videos WHERE id=?;";
    return consulta(sql, id, "Não foi possível apagar!");
  }
}

export default new VideoRepository();
