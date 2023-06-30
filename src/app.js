const express = require('express');
const fs = require('fs');
const app = express()
const PORT = 3000;
app.use(express.static("public"));

app.get('/', (req, res) =>{
    res.sendFile("C:/Users/wesle/OneDrive/Área de Trabalho/Projetos em andamento/Lista05LSWEB/frontend/public/index.html");
   })

app.post('/', (req, res) => {
    res.send('app post');
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`)
})

