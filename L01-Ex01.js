var celsius, kelvin, fahrenheit

celsius=prompt("Digite o valor da temperatura desejada em celsius:")

fahrenheit=(parseFloat(celsius)*9/5)+32
alert("O valor da temperatura convertida para Fahrenheit é: "+fahrenheit+"°F")

kelvin=parseFloat(celsius)+273.15
alert("O valor da temperatura convertida para Kelvin é: "+kelvin+"K")
