let num1 = prompt("Indica un numero:");
let num2 = prompt("Indica otro numero:");
let operacion = prompt("Indica una operación '+', '-', '*' o '/':");
let respuesta;
let error = false;

if (!isNaN(num1) && !isNaN(num2)) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(operacion) {
        case "+":
            respuesta = num1 + num2;
            break;
        case "-":
            respuesta = num1 - num2;
            break;
        case "*":
            respuesta = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                respuesta = num1 / num2;
            } else {
                alert("No se puede dividir por 0.");
                error = true;
            }
            break;
        default:
            alert("Formato de operación incorrecto.");
            error = true;
    }
} else {
    alert("Por favor, ingresa números válidos.");
    error = true;
}

if (!error) {
    alert(`El resultado de ${num1} ${operacion} ${num2} es ${respuesta}`);
}
