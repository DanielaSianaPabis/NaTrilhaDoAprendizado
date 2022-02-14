function Enviar(){
    var login = document.getElementById ("login")
    var senha = document.getElementById("senha")
    var ok
    if(login.value=='aluno' || login.value=='Aluno'){
        if(senha.value=='1234'){
            alert(login.value+ "Você tem acesso ao sistema!")
            ok=true
        }
        else{
            alert("Senha incorreta!")
            ok=false
        }
    }
    else{
        alert("Login incorreto!")
        ok=false
    }
}