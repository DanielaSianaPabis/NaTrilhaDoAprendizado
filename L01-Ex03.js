var n1, n2, n3, n4, media

n1=prompt("Digite a primeira nota do aluno:")
n2=prompt("Digite a segunda nota do aluno:")
n3=prompt("Digite a terceira nota do aluno:")
n4=prompt("Digite a quarta nota do aluno:")
media=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4

if(media>=9 && media<=10){
    alert("Convertida em conceito, a média do aluno que foi igual a "+media+" , equivalendo a um conceito A")
}
else{
    if(media>=8 && media <=8.9){
        alert("Convertida em conceito, a média do aluno que foi igual a "+media+" , equivalendo a um conceito B")
    }
    else{
        if(media>=7 && media<=7.9){
            alert("Convertida em conceito, a média do aluno que foi igual a "+media+" , equivalendo a um conceito C")
        }
        else{
            if(media<7){
                alert("Convertida em conceito, a média do aluno que foi igual a "+media+" , equivalendo a um conceito D")
            }
        }
    }
}
