var n, razao, cont, pg, quantT

n=prompt("Digite o primeiro termo:")
razao=prompt("Digite a razão:")
quantT=prompt("Digite a quantidade de termos que deseja para inserir na progressão geométrica:")
pg=n
document.write("A Progressão Geométrica gerada é ( ")

for(cont=1;cont<=quantT;cont++){
    if(cont<quantT){
        document.write(pg+" , ")
    }
    else{
        document.write(pg+" ) ")
    }
    pg=pg*razao
}
