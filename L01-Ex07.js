var cont, idade, sexo, contM=0, contF=0, velhoM, novoM, maiorTotal=0, menorTotal=0, acm=0,acm1=0, maioridadeM=0, menoridadeM=0, maioridadeF=0, menoridadeF=0, velhaF, novaF

for(cont=0;cont<5;cont++){
    idade=prompt("Digite a idade de uma pessoa:")
    sexo=prompt("Digite o sexo desta pessoa, sendo: F - Feminino | M - Masculino")
    if(sexo=="M"){
        contM++
        while(acm<1){
            velhoM=idade
            novoM=idade
            acm++
        }
        if(idade>velhoM){
            velhoM=idade
        }
        else{
            if(idade<novoM){
                novoM=idade
            }
        }
        if(idade>=18){
            maioridadeM++
        }
        else{
            menoridadeM++
        }
    }
    if(sexo=="F"){
        contF++
        while(acm1<1){
            velhaF=idade
            novaF=idade
            acm1++
        }
        if(idade>velhaF){
            velhaF=idade
        }
        else{
            if(idade<novaF){
                novaF=idade
            }
        }
        if(idade>=18){
            maioridadeF++
        }
        else{
            menoridadeF++
        }
    }
}
maiorTotal=maioridadeM+maioridadeF
menorTotal=menoridadeM+menoridadeF

alert(contM+" pessoa(s) é/são do sexo masculino e "+contF+" pessoa(s) é/são do sexo feminino!")
alert(maiorTotal+" pessoa(s) é/são maior(es) de idade e "+menorTotal+" pessoa(s) é/são menor(es) de idade!")
alert("O homem mais velho tem "+velhoM+" anos de idade e o homem mais novo tem "+novoM+" anos de idade!")
alert("A mulher mais velha tem "+velhaF+" anos de idade e a mulher mais nova tem "+novaF+" anos de idade!")
alert(maioridadeM+" homens são maiores de idade e "+maioridadeF+" mulheres são maiores de idade!")
