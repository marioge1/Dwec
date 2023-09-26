let localidad = prompt("Indica donde vives:");
let edad = prompt("Indica tu edad:");
if(localidad == "Alicante" || localidad == "alicante" && edad>=18 && edad <=35){
    alert("Queremos informarte que puedes acceder al carnet de empresarios emprendedores.")
}
else{
    alert("Tristemente no puedes acceder al carnet de empresarios emprendedores.")
}