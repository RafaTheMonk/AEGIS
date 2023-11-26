import app from './App.js'

// A porta passada pelo serviço de hospedagem ou a porta 3000
const PORT = process.env.PORT || 3000

// Escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`)
})

