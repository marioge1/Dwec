let numero = parseInt(prompt("Introduce un número para calcular su factorial:"));
let factorial = 1;
let i = 1;

while (i <= numero) {
    factorial *= i;
    i++;
}

alert(`El factorial de ${numero} es ${factorial}`);
