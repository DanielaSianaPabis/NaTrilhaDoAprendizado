var nome, valor, cont=0, cont1=2
nome=prompt("Digite seu nome:")
valor=prompt("Muito bem "+nome+"! \nAgora digite um número e vou tentar advinhar:")
if(valor==5){
    alert("Parabéns "+nome+"! Você acertou")
}
else{
    alert(nome+" você errou! O número está entre "+cont1+" e 10")
    cont1=cont+2
    while(valor!=5 && cont<3){
        if(cont<2){
            valor=prompt("Digite um número:")
            if(valor==5){
                alert("Parabéns "+nome+"! Você acertou")
            }
            else{
                alert("Você errou! O número está entre "+cont1+" e 8")
                cont1=cont1+2
            }
        }
        else{
            if(cont==2){
                valor=prompt("Digite um número:")
                if(valor==5){
                    alert("Parabéns "+nome+"! Você acertou")
                }
                else{
                    alert(nome+" que pena, você errou! O número correto era o 5")
                }
            }
        }
        cont++
    }
}