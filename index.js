// npm init
// npm i express
// para executar: noe index.js
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

const arquivoID = JSON.parse(fs.readFileSync("id.json", "utf8"))
let id = arquivoID 

function atualizarID() {
    id = id + 1
    fs.writeFileSync("id.json", JSON.stringify({id :id}), "utf8")
}

app.post("/produto", (req, res) => {
    const produto = req.body
    try {
        const produtos = JSON.parse(fs.readFileSync("produto.json", "utf8"))
        produto.id = id
        produtos.push(produto)
        fs.writeFileSync("produtos.json", JSON.stringifly(produtos), "utf8")
        res.status(201).json({ mensagem: "Produto cadastrado!" })
    } catch (error) {produto
        res.status(500).json({ erro: error.message })
    }
})

app.get("/aula", (req, res) => {
    try {
        const aulas = JSON.parse(fs.readFileSync("aula.json", "utf8))
        const Dia_Da_Semana = aulas.filter((aula) => aula.Dia_Da_Semana == "segunda")
        const ordem_aula = Dia_Da_Semana.sort((a, b) => a.ordem_aula - b.ordem_aula)
        res.status(200).json(ordena_preco)
    } catch (error) {
        res.status(500).json({erro: error.message})
    }
})    
    
app.listen(port, () => {
    console.log("API rodando da porta " + port)
})
