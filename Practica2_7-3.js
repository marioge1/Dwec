let hermanos = prompt("Indica cuantos hermanos tienes:");
let importe = prompt("Indica un importe:");
if(hermanos >= 3){
    alert(`Su importe final es de ${importe-(importe * 15 / 100)}.`)
}
else if (hermanos >= 1){
    alert(`Su importe final es de ${importe-(importe * 5 / 100)}.`)
}
else if (hermanos == 0){
    alert(`Su importe final es de ${importe}.`)
}
else{
    alert(`El formato de hermanos esta mal.`)
}