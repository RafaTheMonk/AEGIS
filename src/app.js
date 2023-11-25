// Importa o módulo express para criar o servidor web
import express from 'express';

// Importa o módulo de conexão do arquivo 'conexao.js' no diretório '../infra/'
import conexao from '../infra/conexao.js';

// Cria uma instância do aplicativo Express
const app = express();

// Middleware para indicar ao Express que deve analisar o corpo das requisições como JSON
app.use(express.json());

// Função para buscar uma notícia pelo ID
function buscarNoticiaPorId(id) {
  // Retorna notícias filtrando pelo ID
  return usuarios.filter(usuario => usuario.id == id);
}

// Função para buscar o índice de uma notícia pelo ID
function buscaIndexNoticia(id) {
  // Retorna o índice de uma notícia pelo ID
  return usuarios.findIndex(usuario => usuario.id == id);
}

// Rota para adicionar um novo usuário ao enviar uma requisição POST para '/seguranca'
app.post('/seguranca', (req, res) => {
  // Obtém o corpo da requisição (novo usuário)
  const usuario = req.body;

  // Define a consulta SQL para inserir um novo usuário
  const sql = "INSERT INTO usuarios SET ?;";

  // Executa a consulta no banco de dados usando a conexão
  conexao.query(sql, usuario, (erro, resultado) => {
    // Verifica se houve algum erro na execução da consulta
    if (erro) {
      // Se houver um erro, retorna um código de status 400 e um objeto JSON com a mensagem de erro
      res.status(400).json({'erro': erro});
    } else {
      // Se a consulta for bem-sucedida, retorna um código de status 201 e o resultado da consulta em JSON
      res.status(201).json(resultado);
    }
  });
});

// Rota que retorna todos os usuários ao acessar '/seguranca'
app.get('/seguranca', (req, res) => {
  // Define a consulta SQL para selecionar todos os usuários
  const sql = "SELECT * FROM usuarios;";

  // Executa a consulta no banco de dados usando a conexão
  conexao.query(sql, (erro, resultado) => {
    // Verifica se houve algum erro na execução da consulta
    if (erro) {
      // Se houver um erro, retorna um código de status 404 e um objeto JSON com a mensagem de erro
      res.status(404).json({'erro': erro});
    } else {
      // Se a consulta for bem-sucedida, retorna um código de status 200 e o resultado da consulta em JSON
      res.status(200).json(resultado);
    }
  });
});

// Rota que retorna um usuário pelo ID ao acessar '/seguranca/:id'
app.get('/seguranca/:id', (req, res) => {
  // Obtém o parâmetro de rota ':id' da requisição
  const id = req.params.id;

  // Define a consulta SQL para selecionar um usuário pelo ID
  const sql = "SELECT * FROM usuarios WHERE id=?;";

  // Executa a consulta no banco de dados usando a conexão
  conexao.query(sql, id, (erro, resultado) => {
    // Obtém a primeira linha do resultado
    const linha = resultado[0];

    // Verifica se houve algum erro na execução da consulta
    if (erro) {
      // Se houver um erro, retorna um código de status 404 e um objeto JSON com a mensagem de erro
      res.status(404).json({'erro': erro});
    } else {
      // Se a consulta for bem-sucedida, retorna um código de status 200 e a primeira linha do resultado em JSON
      res.status(200).json(linha);
    }
  });
});

// Rota para atualizar um usuário pelo ID ao enviar uma requisição PUT para '/seguranca/:id'
app.put('/seguranca/:id', (req, res) => {
  // Obtém o parâmetro de rota ':id' da requisição
  const id = req.params.id;

  // Obtém o corpo da requisição (dados do usuário a serem atualizados)
  const usuario = req.body;

  // Define a consulta SQL para atualizar um usuário pelo ID
  const sql = "UPDATE usuarios SET ? WHERE id=?;";

  // Executa a consulta no banco de dados usando a conexão
  conexao.query(sql, [usuario, id], (erro, resultado) => {
    // Verifica se houve algum erro na execução da consulta
    if (erro) {
      // Se houver um erro, retorna um código de status 400 e um objeto JSON com a mensagem de erro
      res.status(400).json({'erro': erro});
    } else {
      // Se a consulta for bem-sucedida, retorna um código de status 200 e o resultado da consulta em JSON
      res.status(200).json(resultado);
    }
  });
});

// Rota para excluir um usuário pelo ID ao enviar uma requisição DELETE para '/seguranca/:id'
app.delete('/seguranca/:id', (req, res) => {
  // Obtém o parâmetro de rota ':id' da requisição
  const id = req.params.id;

  // Define a consulta SQL para excluir um usuário pelo ID
  const sql = "DELETE FROM usuarios WHERE id=?;";

  // Executa a consulta no banco de dados usando a conexão
  conexao.query(sql, id, (erro, resultado) => {
    // Verifica se houve algum erro na execução da consulta
    if (erro) {
      // Se houver um erro, retorna um código de status 404 e um objeto JSON com a mensagem de erro
      res.status(404).json({'erro': erro});
    } else {
      // Se a consulta for bem-sucedida, retorna um código de status 200 e o resultado da consulta em JSON
      res.status(200).json(resultado);
    }
  });
});

// Exporta o aplicativo Express para ser utilizado em outros módulos
export default app;
