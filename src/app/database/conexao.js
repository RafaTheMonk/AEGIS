import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "bd-aegis",
});

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql Instrução sql a ser executada
 * @param {string=id | [video, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, results) => {
      if (error) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(results));
      return resolve(row);
    });
  });
};

export default conexao;
