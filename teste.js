function testeLogin(form){
    let usuario = form["usuario1"].value;
    let senha = form["senha1"].value;

    if(usuario == "admin" && senha=="lasagna123"){
        window.open("cadastro.html")
    } else {
        alert("Usuário ou senha incorretos!");;
    }
}