




window.addEventListener("load", () => {
    let partidas = pegaPartidas();
    listaPartidas(partidas);
    
})

class partida {
        constructor(titulo, local, data, hora) {
            this.titulo = titulo;
            this.local = local;
            this.data = data;
            this.hora = hora;
        }
    }

const inputtitulo = document.querySelector("#tituloPartida");
const inputlocal = document.querySelector("#localPartida");
const inputdata = document.querySelector("#dataPartida");
const inputhora = document.querySelector("#horaPartida");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
    let titulo = inputtitulo.value;
    let local = inputlocal.value;
    let data = inputdata.value;
    let hora = inputhora.value;
    let novaPartida = new partida(titulo, local, data, hora);
    console.log(titulo);
    console.log("partida criada");
    console.log(novaPartida);
    adicionaPartida(novaPartida);


});