import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

// Middleware para indicar ao Express que deve analisar o corpo das requisições como JSON
app.use(express.json());

// Mock de um conjunto de notícias
const noticias = [
  { id: 1, noticia: 'Hacker', grupo: 'Avançado' },
  { id: 2, noticia: 'CiberAtaques', grupo: 'Iniciante' },
  { id: 3, noticia: 'Certificações', grupo: 'Intermediário' },
];

// Função para buscar uma notícia pelo ID
function buscarNoticiaPorId(id) {
  return noticias.filter(noticia => noticia.id == id);
}

// Função para buscar o índice de uma notícia pelo ID
function buscaIndexNoticia(id) {
  return noticias.findIndex(noticia => noticia.id == id);
}


// Rota para adicionar uma nova notícia ao enviar uma requisição POST para '/seguranca'
app.post('/seguranca', (req, res) => {
    noticias.push(req.body);
    res.status(201).send('Notícia cadastrada com sucesso!');
});

// Rota padrão que retorna 'Hello World!' ao acessar o caminho '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rota que retorna todas as notícias ao acessar '/seguranca'
app.get('/seguranca', (req, res) => {
  res.status(200).send(noticias);
});

// Rota que retorna uma notícia específica pelo ID ao acessar '/seguranca/:id'
app.get('/seguranca/:id', (req, res) => {
  res.json(buscarNoticiaPorId(req.params.id));
});

// Rota para atualizar uma notícia pelo ID ao enviar uma requisição PUT para '/seguranca/:id'
app.put('/seguranca/:id', (req, res) => {
    let index = buscaIndexNoticia(req.params.id);
    noticias[index].noticia = req.body.noticia;
    noticias[index].grupo = req.body.grupo;
    res.json(noticias);
  });

// Rota para excluir uma notícia pelo ID ao enviar uma requisição DELETE para '/seguranca/:id'
app.delete('/seguranca/:id', (req, res) => {
  let index = buscaIndexNoticia(req.params.id);
  noticias.splice(index, 1);
  res.send(`Notícia com id ${req.params.id} excluída com sucesso!`);
});

// Exporta o aplicativo Express para uso em outros arquivos
export default app;
