import { ifError } from 'assert';
import fs from 'fs';
import {v4 as uuidv4 } from 'uuid'
const id = uuidv4()
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

class jogador {
    constructor(nome, tel, id) {
        this.nome = nome;
        this.tel = tel;
        this.pres = false;
        this.id = id
    }
}


const adicionaJogador = (req, res) => {
    let nomeJogador = req.body.name;
    let telJogador = req.body.cel;
    let novoJogador = new jogador(nomeJogador, telJogador, id)
    fs.readFile(db, (err, content) => {
        if(err){
            console.log("erro")
        }
        else {
            if(content) {
                let idPart = req.body.di;
                let fileContent = JSON.parse(content)
                fileContent.forEach(element => {
                    if(element.id === idPart){
                        element.jogadores.push(novoJogador)
                    }

                });
                fs.writeFile(db, JSON.stringify(fileContent), (err) => {
                    if(!err){
                        res.json({
                            status: "OK"
                        });
                    }
                })
            }
            
        }
})}







const adicionaPartida = (req, res) => { 
    fs.readFile(db, (err, content) => {
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
            res.json(JSON.parse(partidas))
        }
    })
}

const deletaJogador = (req, res) => {
    const idPart = req.params.idpart
    const idJog = req.params.idjog
    fs.readFile(db, (err, content) => {
        if(err){
            console.log("erro")
        }
        else {
            if(content) {
                let fileContent = JSON.parse(content)
                fileContent.forEach(match => {
                    if(match.id === idPart){
                        let listaPlayers = match.jogadores
                        listaPlayers.forEach(player => {
                            if(idJog === player.id){
                                let jogDel = player.id
                                let index = match.jogadores.findIndex(obj => obj.id === jogDel)
                                match.jogadores.splice(index, 1);
                                fs.writeFile(db, JSON.stringify(fileContent), (err) => {
                                    if(!err){
                                        res.json({
                                            status: "OK"
                                        });
                                    }
                                })
                            }
                        });
                    }
                });
            }
        }
    })
}

const mudarPresenca = (req, res) => {
    fs.readFile(db, (err, content) => {
        if(err){
            console.log("erro")
        }

        else {
            if(content) {
                const idPart = req.params.idpart;
                const idJog = req.params.idjog;
                let fileContent = JSON.parse(content)
                fileContent.forEach(match => {
                    if(match.id === idPart){
                        const jogadorPresenca = match.jogadores.findIndex(player => player.id === idJog);
                        if (jogadorPresenca >= 0 ) {
                            const jogador = match.jogadores[jogadorPresenca];
                            jogador.pres = !jogador.pres;
                            fs.writeFile(db, JSON.stringify(fileContent), (err) => {
                                if(!err){
                                    res.json({
                                        status: "OK"
                                    });
                                }
                            })
                        }                        
                        
                        }});
                    }}}
    )}
                    

const deletaPartida = (req, res) => {
    let id = req.params.id
    fs.readFile(db, (err, content) => {
        if(err){
            console.log("erro")
        }
        else {
            if(content) {
                let fileContent = JSON.parse(content)
                fileContent.forEach(partida => {
                    if(partida.id == id){
                        let index = fileContent.findIndex(obj => obj.id === partida.id);
                        fileContent.splice(index, 1);
                        fs.writeFile(db, JSON.stringify(fileContent), (err) => {
                            if(!err){
                                res.json({
                                    status: "OK"
                                });
                            }
                        })
                    }
                });
            }
        }

    })
}

export {adicionaPartida, pegaPartidas, adicionaJogador, deletaJogador, mudarPresenca, deletaPartida}