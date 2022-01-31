var n=0, valores, cont=0, ant1=0, ant2=1

valores=prompt("Digite a quantidade de elementos que deseja para gerar a sequência de Fibonacci:")

while(cont<valores){
    document.write("<t2> "+n+" </t2>")
    n=ant1+ant2
    ant2=ant1
    ant1=n
    cont++
}