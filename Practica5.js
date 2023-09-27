let nombre = prompt("Indica tu nombre:");
let apellido1 = prompt("Indica tu primer apellido:");
let apellido2 = prompt("Indica tu segundo apellido:");
let salario = prompt("Indica tu salario:");
let edad = prompt("Indica tu edad:");

if(salario>=1000 && salario<=2000){
    if (edad>45){
        salario = parseFloat(salario) + (parseFloat(salario) * 3 / 100)
    }
    else{
        salario = parseFloat(salario) + (parseFloat(salario) * 10 / 100)
    }
}else if(salario<1000){
    if (edad>45){
        salario = parseFloat(salario) + (parseFloat(salario) * 15 / 100)
    }else if(edad<=45 && edad>=30){
        salario = parseFloat(salario) + (parseFloat(salario) * 10 / 100)
    }else{
        salario = 1100;
    }
}
alert(`Te llamas ${nombre} ${apellido1} ${apellido2}, tienes ${edad} años y cobras ${salario} mensuales.`)