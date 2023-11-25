import app from './src/App.js'

const PORT = 3000

// Escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`)
})

