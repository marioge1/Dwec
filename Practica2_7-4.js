let mes = prompt("Indica un mes mediante el numero:");
let respuesta = "Este mes tiene "

switch(parseFloat(mes)){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
        alert(`${respuesta}31 dias`)
        break;
    case 2:
        alert(`${respuesta}28 dias`)
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert(`${respuesta}30 dias`)
        break;
    default:
        alert("El formato de mes que has introducido es erroneo.")
}