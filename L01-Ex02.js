var valor,resp, dolar, real, d, r

resp=prompt("Deseja converter seu dinheiro para Dólar ou Real? | (1)-Dólar  (2)-Real")

if(resp==1){
    d=prompt("Digite o valor para ser convertido:")
    dolar=parseFloat(d)/5.44
    alert("O seu valor monetário convertido de real para dólar equivale a US$ "+dolar)
}
else{
    r=prompt("Digite o valor para ser convertido:")
    real=parseFloat(r)*5.44
    alert("O seu valor monetário convertido de dólar para real equivale a R$ "+real)
}