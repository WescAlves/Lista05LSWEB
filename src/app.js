import express, { json } from "express"
import {adicionaJogador, adicionaPartida, pegaPartidas, deletaJogador, mudarPresenca, deletaPartida} from "../backend/methods.js"



const app = express()
const PORT = 3000;
app.use(express.json());
app.use(express.static("./frontend/public"));


app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`)
})

app.post("/criarpartida", (req, res) => {
    adicionaPartida(req, res);
})

app.post("/criarjogador", (req, res) => {
    adicionaJogador(req, res)
})

app.delete("/removejogador/:idpart/:idjog", (req, res) => {
    deletaJogador(req, res)
})

app.get("/pegapartidas", (req, res) => {
    pegaPartidas(req, res)  
})

app.get("/pegapartida/:id", (req, res) => {
})

app.patch("/presencajogador/:idpart/:idjog", (req, res) => {
    mudarPresenca(req, res)
})

app.delete("/deletapartida/:id", (req, res) => {
    deletaPartida(req, res)

})
    

    


