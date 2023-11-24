import express from 'express'
const app = express()

//Indicar para o express ler body com json
app.use(express.json())
//mock
const selecoes = [
    {id: 1, selecao: 'Brazil', grupo: 'G'},
    {id: 2, selecao: 'England', grupo: 'G'},
    {id: 3, selecao: 'Camaroes', grupo: 'G'},
]

app.get('/', (req, res) => {
  res.send('Helo World!')
})

app.get('/seguranca', (req, res) => {
  res.status(200).send(selecoes)
})

app.post('/seguranca', (req, res) => {
  selecoes.push(req.body)
  res.status(201).send('Seleção cadastrada com sucesso!')
})


export default app;