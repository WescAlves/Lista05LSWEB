import fs from 'fs';
import {v4 as uuidv4 } from 'uuid'
const id = uuidv4()
console.log(id)
const db = "backend/matches.json";
class partida {
    constructor(titulo, local, data, hora, id) {
        this.titulo = titulo;
        this.local = local;
        this.data = data;
        this.hora = hora;
        this.id = id;
        this.jogadores = [];
    }
}

const adicionaPartida = (req, res) => { 
    console.log(req.body) 
    fs.readFile(db, (err, content) => {
        //console.log(`Entrou e o body é ${req.body}`)
        console.log("Entrou no RF")
        if(err){
            console.log("erro")
        }
        else {
            console.log("Entrou")
            if(content){
                let fileContent = content
                let fileJson = JSON.parse(fileContent)
                let titulo = req.body.title
                let local = req.body.loc
                let data = req.body.date
                let hora = req.body.hour
                console.log(titulo)
                let novaPartida = new partida(titulo, local, data, hora, id)

                fileJson.push(novaPartida)
                fs.writeFile(db, JSON.stringify(fileJson), (err) => {
                    if(!err){
                        res.json({
                            status: "OK"
                        });
                    }
                })
            }   
            else{
                fs.writeFile(db, novaPartida, (err) => {
                    if(!err){
                        res.json({
                            status: "OK"
                        });
                    }
                })
            }
            
            
            
        }
        
    });
    //console.log(fileContent);      
}

const pegaPartidas = (req, res) => {
    fs.readFile(db, (err, partidas) => {
        
        if (err) {
            console.log("Erro ao ler partidas!!!");
        }
        else {
            console.log(`Retornando ${partidas}`)
            res.json(JSON.parse(partidas))
        }
    })
}


export {adicionaPartida, pegaPartidas};