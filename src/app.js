import express, { json } from "express"
import {adicionaPartida, pegaPartidas} from "../backend/methods.js"

const app = express()
const PORT = 3000;
app.use(express.json());
app.use(express.static("./frontend/public"));


app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`)
})

app.post("/criarpartida", (req, res) => {
    console.log(req.body);
    adicionaPartida(req.body, res);
})

app.get("/pegapartidas", (req, res) => {
    pegaPartidas(req, res)  
    })



    


