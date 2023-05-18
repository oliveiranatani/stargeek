const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem")
const nome = document.getElementById("inome");
const data = document.getElementById("idate");
const email = document.getElementById("iemail");
const senha = document.getElementById("isenha");
const confirmarsenha = document.getElementById("iconfirsenha");

function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        let validar = dados.find(elemento => elemento.emailcliente==email);
        if (validar){
            msg.innerHTML="E-mail já existe!";
            evento.preventDefault();
        } else {
            criarUsuario(evento);
        }  
    }  
}

formulario.onsubmit = (evento) =>{
    if (nome.value == "") {
        evento.preventDefault();
        msg.innerHTML ="Digite seu nome";
        nome.focus();
        return null; 
    }

    if (data.value == ""){
        evento.preventDefault();
        msg.innerHTML ="Digite sua data de nascimento";
        senha.focus();
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
    if (senha.value != confirmarsenha.value){
        evento.preventDefault();
        msg.innerHTML ="As senhas são diferentes";
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
    setInterval(()=>{window.location.assign("entrar.html");},2000)
}