//Transformar os elementos em variaveis:
const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem")
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");


function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else{
        dados.forEach(elemento =>{
            if (elemento.emailcliente == email) {
                msg.innerHTML="E-mail já cadastrado!"
                evento.preventDefault();
            }
             else{
                criarUsuario(evento);
            }
        }
        );
    }
}


formulario.onsubmit = (evento) =>{
    if (nome.value == "") {
        evento.preventDefault();
        msg.innerHTML ="Coloque seu nome";
        nome.focus();
        return null; 
    }

    if (email.value == ""){
        evento.preventDefault();
        msg.innerHTML ="Digite seu e-mail";
        email.focus();
        return null;
    }

    if (senha.value == ""){
        evento.preventDefault();
        msg.innerHTML ="Digite sua senha";
        senha.focus();
        return null;
    }

    verificarEmail(email.value, evento)

}

function criarUsuario(evento) {

    let dados = JSON.parse(localStorage.getItem("bd")) || [];   
    dados.push(
        {
            nomecliente : nome.value,
            emailcliente : email.value,
            senhacliente : senha.value
        }
        
    )

    localStorage.setItem("bd", JSON.stringify(dados));
    msg.innerHTML ="Usuário Cadastrado com Sucesso"
    evento.preventDefault();
    setInterval(()=>{window.location.assign("login.html");},2000)
}