import app from './src/App.js'

import conexao from './infra/conexao.js'

const PORT = 3000

// Fazer a conexão
conexao.connect((erro)=>{
    if(erro){
        console.log(`Conexão falhou ${erro}`)
    }else{
        console.log('Conexão realizado com sucesso!')
        // Escutar a porta 3000
        app.listen(PORT, () => {
            console.log(`Servidor Rodando na porta ${PORT}`)
        })
    }
})

