let mensaje = "Los números pares entre 25 y 1 son: ";

for (let i = 25; i >= 1; i--) {
    if (i % 2 == 0) {
        mensaje += i + " ";
    }
}

alert(mensaje);