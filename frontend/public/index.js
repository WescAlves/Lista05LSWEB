

window.addEventListener("load", () => {
        listaPartidas()
    
}   
)
const listaPartidas = () => {
    let partidas = fetch('/pegapartidas', {
        method: "GET",
    })
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        let lista = response
        const divMatches = document.querySelector("#partidas");
        divMatches.innerHTML = '';
        divMatches.textContent = 'Partidas';
        const table = document.createElement("table")
        divMatches.appendChild(table)
        const thead = document.createElement("tr")
        table.append(thead);
        const tdNome = document.createElement("td")
        tdNome.textContent = 'Nome da partida'
        const tdLocal = document.createElement("td")
        tdLocal.textContent = 'Local'
        const tdData = document.createElement("td")
        tdData.textContent = 'Data'
        const tdHora = document.createElement("td")
        tdHora.textContent = 'Horário'
        const tdAcao = document.createElement('td')
        tdAcao.textContent = 'Ações'
        thead.appendChild(tdNome);
        thead.appendChild(tdLocal);
        thead.appendChild(tdData);
        thead.appendChild(tdHora);
        thead.appendChild(tdAcao);
        response.forEach(element => {
            const novoTr = document.createElement("tr");
            table.appendChild(novoTr);
            const tdnovoNome = document.createElement("td")
            tdnovoNome.textContent = element.titulo
            const tdnovoLocal = document.createElement("td")
            tdnovoLocal.textContent = element.local
            const tdnovoData = document.createElement("td")
            tdnovoData.textContent = element.data
            const tdnovoHora = document.createElement("td")
            tdnovoHora.textContent = element.hora
            const tdNovaAcao = document.createElement("td")
            const RemBtn = document.createElement("button")
            RemBtn.textContent = 'Remover'
            tdNovaAcao.appendChild(RemBtn);
            novoTr.appendChild(tdnovoNome)
            novoTr.appendChild(tdnovoLocal)
            novoTr.appendChild(tdnovoData)
            novoTr.appendChild(tdnovoHora)
            novoTr.appendChild(tdNovaAcao)
            
        });

    })


}

class partida {
        constructor(titulo, local, data, hora) {
            this.titulo = titulo;
            this.local = local;
            this.data = data;
            this.hora = hora;
            this.jogadores = [];
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
    fetch('/criarpartida', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(novaPartida)
    })
    listaPartidas()



});