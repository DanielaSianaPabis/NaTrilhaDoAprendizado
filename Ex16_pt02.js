function Enviar(){
    var login= document.getElementById ("login")
    var senha= document.getElementById("senha")
    var ok
    if(login.value=='aluno'){
        if(senha.value=='1234'){
            alert(login.value+ "Você tem acesso ao sistema!")
            ok=true
        }
        else{
            if(senha.value==""){
                alert("Digite a sua senha!")
                ok=false
            }
            else if(senha.value!="1234"){
                alert("Senha inválida!")
                ok=false
            }
        }
    }
    else{
        if(login.value==""){
            alert("Digite o seu login!")
            ok=false
        }
        else if(login.value!="aluno"){
            alert("Login inválido!")
            ok=false
        }
    }
    return ok
}


