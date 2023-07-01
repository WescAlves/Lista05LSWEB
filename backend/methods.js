import fs from 'fs/promises'
const db = "backend/matches.json";

const adicionaPartida = (partida, res) => {
    const file = JSON.stringify(partida);
    fs.writeFile(db, file)
    .then(() => {
        console.log(db);
        console.log(file);
        console.log("Adicionado com sucesso");
        res.send("ok");
    })
    .catch(() => {
        console.log("Deu merda");
        res.send("not ok");    
    })
    
    
}


export {adicionaPartida};