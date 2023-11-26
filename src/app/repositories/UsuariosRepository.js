import conexao, {consulta} from "../database/conexao.js";

class UsuariosRepository {

    create(usuario){
        const sql = "INSERT INTO usuarios SET ?;";
        return consulta(sql, usuario, 'Não foi possível cadastrar!')
    }
    findAll(){
        const sql = "SELECT * FROM usuarios;";
        return consulta(sql,  'Não foi possível localizar!')
    };

    findById(id) {
        const sql = "SELECT * FROM usuarios WHERE id=?;";
        return consulta(sql, id,  'Não foi possível localizar!')
    }

    update(usuario, id){
        const sql = "UPDATE usuarios SET ? WHERE id=?;";

        return consulta(sql, [usuario, id],  'Não foi possível atualizar!')
    }

    delete(id){
        const sql = "DELETE FROM usuarios WHERE id=?;";
        return consulta(sql, id,  'Não foi possível apagar!')
    }
}

export default new UsuariosRepository()