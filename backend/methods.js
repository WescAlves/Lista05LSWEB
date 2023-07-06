import fs from 'fs'
const db = "backend/matches.json";

const adicionaPartida = (partida, res) => {  
    fs.readFile(db, (err, content) => {
        console.log("Entrou no RF")
        if(err){
            console.log("erro")
        }
        else {
            console.log("Entrou")
            if(content){
                let fileContent = content
                let fileJson = JSON.parse(fileContent)
                fileJson.push(partida)
                fs.writeFile(db, JSON.stringify(fileJson), (err) => {
                    if(!err){
                        res.json({
                            status: "OK"
                        });
                    }
                })
            }   
            else{
                fs.writeFile(db, partida, (err) => {
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