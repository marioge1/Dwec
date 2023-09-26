let numeroSecreto = parseInt(prompt("Usuario 1: Ingresa un número secreto entre 1 y 100:"));

if (isNaN(numeroSecreto) || numeroSecreto < 1 || numeroSecreto > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
} else {
    alert("Número secreto guardado. Ahora es el turno del Usuario 2 para adivinarlo.");

    let adivinado = false;

    while (!adivinado) {
        let intento = parseInt(prompt("Usuario 2: Intenta adivinar el número secreto:"));

        if (intento === numeroSecreto) {
            adivinado = true;
            alert("¡Felicidades! Usuario 2 ha adivinado el número secreto.");
        } else if (intento < numeroSecreto) {
            alert("El número secreto es mayor. ¡Sigue intentando!");
        } else {
            alert("El número secreto es menor. ¡Sigue intentando!");
        }
    }
}