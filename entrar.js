const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evt)=>{

    if (email.value == ""){
        evt.preventDefault();
        msg.innerHTML = "Digite seu email";
        return null;
        email.focus();
    } 

    if (senha.value == ""){
        evt.preventDefault();
        msg.innerHTML = "Digite sua senha";
        return null;
        senha.focus();
    }

    let dados = JSON.parse(localStorage.getItem("bd"));
    let logado;
    dados.forEach((elemento) => {
        if(elemento.emailcliente == email.value && elemento.senhacliente == senha.value){
            msg.innerHTML = "Aguarde redirecionando..."
           
            sessionStorage.setItem("logado", email.value);
            setTimeout(()=>{
                window.location.assign("catalago.html");
            }, 2000);
            evt.preventDefault();
            logado = "ok";
            return true;
        }
        if (logado!="ok") {
            msg.innerHTML = "Usuario ou senha incorretos"
            evt.preventDefault()
            return null;
        }
    });
}