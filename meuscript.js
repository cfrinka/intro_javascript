let num1 = Number(window.prompt('Insira o número 1'));
let num2 = Number(window.prompt('Insira o número 2'));

if (num1 > num2) {
    alert('Esse número é maior:' + num1)
} else if (num1 == num2) {
    alert('os dois números são iguais')
} else {
    alert('Esse número é maior:' + num2)
}