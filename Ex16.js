function Enviar(){
    var nome= document.getElementById("nome")
    var email = document.getElementById("email")

    if(nome.value!="" && nome.value.indexOf(" ")!=-1)
    {
        if(email.value.indexOf("@")!=-1)
        {
            alert(nome.value+" agradecemos o seu contato!")
            ok=true
        }
        else
        {
            alert("Digite um email válido!")
            ok=false
        }
    }
    else
    {
        alert("Preeencha seu nome completo!")
        ok=false
    }
    return ok
}
/*ATIVIDADE: VALIDAR A DATA DE NASCIMENTO E OPCIONAL NÃO VALIDAR SE TIVER MENOS QUE 12 ANOS E FAZER UM CAMPO PRA VALIDAR NOME E SENHA*/