window.addEventListener("load", () => {
    let url = window.location.href;
    url = url.split('?id=');
    let id = url[1];
    console.log(id)
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
                const container = document.querySelector("#container")
                const table = document.createElement("table")
                container.appendChild(table)
                const thead = document.createElement("tr")
                const tdprincipal = document.createElement("td");
                table.appendChild(thead);
                thead.appendChild(tdprincipal);
                let jogadores = element.jogadores;
                tdprincipal.textContent = 'Lista de jogadores!!!!'
                let novoTr = document.createElement("tr");
                let tdNome = document.createElement("td");
                let tdTel = document.createElement("td");
                let tdPres = document.createElement("td");
                let tdAcao = document.createElement("td");
                let RemBtn = document.createElement("button");
                tdNome.textContent = element.jogadores



                novoTr.appendChild(tdNome);
                novoTr.appendChild(tdTel);
                novoTr.appendChild(tdPres);
                novoTr.appendChild(tdAcao);
                novoTr.appendChild(RemBtn);

            }
            
        });
    
    })
})