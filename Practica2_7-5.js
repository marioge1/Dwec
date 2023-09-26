let num = prompt("Indica un numero:");
let par_impar = (num % 2 == 0) ? true : false;
let mult_tres = (num % 3 == 0) ? true : false;
let mult_cinco = (num % 5 == 0) ? true : false;
let respuesta = "";
if(par_impar){
    respuesta = `El numero ${num} es par`;
}else{
    respuesta = `El numero ${num} es impar`;
}
if(mult_tres){
    respuesta = respuesta + ", es multiplo de 3"
}
if(mult_cinco){
    respuesta = respuesta + ", es multiplo de 5"
}
alert(respuesta);