/* Crie um Script em que o usuário entre com o ano de nascimentoe também pergunte ao usuário se ele foi aprovado na prova prática de direção. Caso cumpram-se os requisitos, o site deve retornar a informação de que ele está apto ou inapto para obter a CNH. Caso inapto,, dizer em qual requisitoestá reprovado. */

var ano, idade, R

ano=prompt("Digite seu ano de nascimento:")
idade=2021-parseInt(ano)

if(idade>=18){
    R=prompt("Você foi aprovado na prova prática de direção? Sim ou Não?")
    if(R=="Sim"){
        alert("Você está apto para obter a sua CNH!")
    }
    else{
        alert("Voce está inpto para obter sua CNH, pois foi reprovado na prova prática de direção!")
    }
}
else{
    alert("Você está inapto para obter sua CNH, pois tem idade inferior a 18 anos!")
}