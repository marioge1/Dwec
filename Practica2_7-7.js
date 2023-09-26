let resultado = 0;
let fin = true;

while (fin) {
    let num = prompt("Indica un numero:");
    
    if (!isNaN(num)) {
        num = parseFloat(num);
        resultado += num;
    } else {
        alert("Por favor, ingresa un número válido.");
    }
    
    if (num == 0) {
        fin = false;
    }
}

alert(`La suma de los numeros ingresados da ${resultado}`);