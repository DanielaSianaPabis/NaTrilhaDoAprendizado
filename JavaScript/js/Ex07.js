/*Fazer um programa e exiba se um valor é maior que outro*/

var n1, n2
n1= prompt("Digite o primeiro valor: ")

n2= prompt("Digite o outro valor: ")

if(n1<n2){
    alert(n1+" é menor que "+n2)
    console.log(n1+ "é menor ou igual a "+n2)
}
else if(n1>n2){
    alert(n1+" é maior que "+n2)
}

else{
    alert(n1+" é igual a "+n2)
}
console.log("Código JavaScript finalizado!")