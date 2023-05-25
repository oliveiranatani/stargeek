
const cards = document.querySelector(".cards");


carregarCatalogo();

function carregarCatalogo() {
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if (dados == null) {
        divcard.innerHTML = "<p> Nenhum item encontrado </p>";
        cards.appendChild(divcard);
        return null
    } 

    dados.forEach((elemento,indice) => {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `
        <div class="cardimagem"><img src="img/${elemento.foto}"></div>
        <div class="cardnome">${elemento.nome}
        <p>${elemento.descricao}</p>
        </div>
        <div class="btnacao">
        <div class="editar"><i class="bi bi-pencil-fill" onclick="editar(${indice})"></i></div>
        <div class="excluir"><i class="bi bi-trash3-fill" onclick="excluir(${indice})"></i></div>
        </div>
        `
        cards.appendChild(divcard);
    })
}

function excluir(indice){
    if (confirm("Tem certeza de que deseja excluir?")) {
        let dados = JSON.parse(localStorage.getItem("catalogo"));
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    window.location.reload();
    }  
}