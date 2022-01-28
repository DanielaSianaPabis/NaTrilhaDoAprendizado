var valores, maior, menor, cont, cont1=0

for(cont=0; cont<5; cont++){
    valores=prompt("Digite um número:")
    while(cont1<1){
        maior=valores
        menor=valores
        cont1++
    }
    if(valores>maior){
        maior=valores
    }
    else{
        if(valores<menor){
            menor=valores
        }
    }
}
alert("O maior número digitado foi o "+maior)
alert("O menor número digitado foi o "+menor)
