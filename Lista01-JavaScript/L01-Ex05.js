var n, razao, cont, pg, quantT

n=prompt("Digite o primeiro termo:")
razao=prompt("Digite a razão:")
quantT=prompt("Digite a quantidade de termos que deseja para inserir na progressão geométrica:")
pg=n
for(cont=1;cont<=quantT;cont++){
    pg=pg*razao
}
alert("A Progressão Geométrica gerada é: ")