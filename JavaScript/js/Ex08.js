/*Crie um script js em que o usuário entre com o ano de nascimento e também pergunte ao usuário se ele foi aprovado na prova prática de direção. Caso cumpram-se os requisitos o site deve retornar a informação de que ele está apto ou inapto para obter a CNH. Caso Inapto, dizer em qual requisito está aprovado*/

var ano, idade, res

ano= prompt("Em qual ano você nasceu?")

idade=2021 - parseInt(ano)

if (idade>=18){
    res= prompt("Você foi aprovado na prova prática de direção? S - Sim | N - Não")

    if(res==S){
        alert("Você pode receber a CNH")
    }
    else{
        alert("Você não pode receber a CNH")
    }
}
else{
    alert("Você não pode receber a CNH, pois não tem 18 anos")
}