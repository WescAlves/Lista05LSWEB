window.addEventListener("load", () => {
    listaJogadores()
})
    
let url = window.location.href;
    url = url.split('?id=');
    let id = url[1];
    console.log(id)
    
    
let listaJogadores = () => {
    
    const container = document.querySelector("#container")
    container.innerHTML =''
    const table = document.createElement("table")
    container.appendChild(table)
    const thead = document.createElement("tr")
    const tdprincipal = document.createElement("td");
    table.appendChild(thead);
    thead.appendChild(tdprincipal);
    tdprincipal.textContent = 'Lista de jogadores!!!!'    
    fetch('/pegapartidas', {
    method: "GET",
    })
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        response.forEach(element => {
            if(element.id === id){
                let players = element.jogadores
                
                players.forEach(player => {
                    console.log(players)
                    console.log("Entrou")
                    
                    let novoTr = document.createElement("tr");
                    let tdNome = document.createElement("td");
                    let tdTel = document.createElement("td");
                    let tdPres = document.createElement("td");
                    let tdAcao = document.createElement("td");
                    let RemBtn = document.createElement("button");
                    let checkbox = document.createElement("input");
                    checkbox.type = 'checkbox'
                    RemBtn.textContent = 'Remover'
                    tdNome.textContent = player.nome
                    tdTel.textContent = player.tel
                    table.appendChild(novoTr);
                    novoTr.appendChild(tdNome);
                    novoTr.appendChild(tdTel);
                    novoTr.appendChild(tdPres);
                    novoTr.appendChild(tdAcao);
                    tdPres.appendChild(checkbox)
                    tdAcao.appendChild(RemBtn);
                    checkbox.checked = player.pres
                    checkbox.addEventListener("click", () => {
                            console.log(element.id)
                            console.log(player.id)
                            fetch(`/presencajogador/${element.id}/${player.id}`, {
                                method:"PATCH",
                            })  
                            .then(listaJogadores)
                    })

                    RemBtn.addEventListener("click", () => {
                        console.log(element.id)
                        console.log(player.id)
                        fetch(`/removejogador/${element.id}/${player.id}`, {
                            method: "DELETE",
                        })
                        .then(listaJogadores)
                    })
                });
                

            }
            
        });
    
    })
}

const addBtn = document.querySelector("#addBtn")
const inputNome = document.querySelector("#inputnome")
const inputTel = document.querySelector("#inputtel")
addBtn.addEventListener("click", () => {
    let nome = inputNome.value
    let tel = inputTel.value
    let url = window.location.href;
    url = url.split('?id=');
    let id = url[1];
    let dados = {name: nome, cel: tel, di: id}
    console.log(dados)
    fetch(`/criarjogador`, {
        method: "POST",
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(dados),
    })
    .then(listaJogadores)
})





