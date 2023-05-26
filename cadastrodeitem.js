const botaomodal = document.getElementById("btn");
const cards = document.querySelector(".cards");
const cadmodal = document.querySelector(".cadmodal");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");
const botaocadastrar = document.querySelector(".btncadastrar");
const botaoeditar = document.querySelector(".btneditar");
const boaofechar = document.querySelector("btnclose");
const idelemento = document.getElementById("idalterar");

carregarCatalogo();

botaomodal.onclick = () => {
    cadmodal.style.display = "flex";
    botaoeditar.style.display = "none";
    botaocadastrar.style.display = "block"
}

function fechar () {
    cadmodal.style.display = "none";
}

botaocadastrar.onclick = (evento) => {
    evento.preventDefault();
    fenvio()
    .then(result => {
        if(result) {
            let dados = JSON.parse(localStorage.getItem("catalogo")) || [];
    dados.push(
        {
            nome : nome.value,
            descricao : descricao.value,
            foto : nomeArq
        }
    )
    localStorage.setItem("catalogo",JSON.stringify(dados));
        }
    
    else{
        alert("Houve erro no envio do arquivo");
    }    

    });
}

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
        divcard.innerHTML = `
        <div class="cardimagem"><img src="img/${elemento.foto}"></div>
        <div class="cardnome">${elemento.nome}
        <p>${elemento.descricao}</p>
        </div>
        <div class="cardinfo">
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
