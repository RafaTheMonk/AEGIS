import express from 'express';
import conexao from '../infra/conexao.js'
// Cria uma instância do aplicativo Express
const app = express();

// Middleware para indicar ao Express que deve analisar o body das requisições como JSON
app.use(express.json());

// Função para buscar uma notícia pelo ID
function buscarNoticiaPorId(id) {
  return usuarios.filter(usuario => usuario.id == id);
}

// Função para buscar o índice de uma notícia pelo ID
function buscaIndexNoticia(id) {
  return usuarios.findIndex(usuario => usuario.id == id);
}


// Rota para adicionar um novo usuario ao enviar uma requisição POST para '/seguranca'
app.post('/seguranca', (req, res) => {
    // usuarios.push(req.body);
    // res.status(201).send('Notícia cadastrada com sucesso!');
    const usuario = req.body
    const sql = "INSERT INTO usuarios SET ?;"
  conexao.query(sql, usuario, (erro, resultado)=>{
    if(erro){
      res.status(400).json({'erro': erro})
    } else{
      res.status(201).json(resultado)
    }
  })
});

// Rota que retorna todas os usuarios ao acessar '/seguranca'
app.get('/seguranca', (req, res) => {
  // res.status(200).send(usuarios);
  //função de call back
  const sql = "SELECT * FROM usuarios;"
  conexao.query(sql, (erro, resultado)=>{
    if(erro){
      res.status(404).json({'erro': erro})
    } else{
      res.status(200).json(resultado)
    }
  })
});

// Rota que retorna o usuario específica pelo ID ao acessar '/seguranca/:id'
app.get('/seguranca/:id', (req, res) => {
  // res.json(buscarNoticiaPorId(req.params.id));
  const id = req.params.id
  const sql = "SELECT * FROM usuarios WHERE id=?;"
  conexao.query(sql, id, (erro, resultado)=>{
    const linha = resultado[0]
    if(erro){
      res.status(404).json({'erro': erro})
    } else{
      res.status(200).json(linha)
    }
  })
});

// Rota para atualizar uma notícia pelo ID ao enviar uma requisição PUT para '/seguranca/:id'
app.put('/seguranca/:id', (req, res) => {
    let index = buscaIndexNoticia(req.params.id);
    usuarios[index].usuario = req.body.usuario;
    usuarios[index].grupo = req.body.grupo;
    res.json(usuarios);
  });

// Rota para excluir uma notícia pelo ID ao enviar uma requisição DELETE para '/seguranca/:id'
app.delete('/seguranca/:id', (req, res) => {
  let index = buscaIndexNoticia(req.params.id);
  usuarios.splice(index, 1);
  res.send(`Usuário com id ${req.params.id} excluída com sucesso!`);
});

// Exporta o aplicativo Express para uso em outros arquivos
export default app;
