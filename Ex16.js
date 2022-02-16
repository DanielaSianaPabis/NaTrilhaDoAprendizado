function Enviar(){
    var nome=document.getElementById("nome")
    var email=document.getElementById("email")
    var datanasc=document.getElementById ("datanasc")
    var comentario=document.getElementById("comentario")
    var ok
    
    if(nome.value!="" && nome.value.IndexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
            if(datanasc.value!="" && datanasc.value<"2011"){
                if(comentario.value.length>49){
                    alert(nome.value +" Agradecemos o seu contato!")
                    ok=true
                }
                else{
                    alert("O comentário deve possuir no mínimo 50 caracteres!")
                    ok=false
                }
            }
            else{
                alert("Sua data de nascimento não pode estar além de 2010 e/ou verifique se prencheu este campo de forma correta!")
                ok=false
            }
        }
        else{
            alert("Digite um e-mail válido!")
            ok=false
        }
    }
    else{
        alert("Prencha o seu nome completo e de forma correta!")
        ok=false
    }

    return ok

}