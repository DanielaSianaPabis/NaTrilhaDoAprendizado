var fatorial=1, valor

valor=prompt("Digite um valor, do qual deseja obter o fatorial:")
for(fatorial=1; valor>1;valor=valor-1){
    fatorial=fatorial*valor
}
alert("O fatorial é: "+fatorial)