alert("Bienvenido al restaurante. Esta es tu cuenta.")
var num1 = parseInt(prompt("Costo de entrada"));
var num2 = parseInt(prompt("Costo del Plato Principal"));
var num3 = parseInt(prompt("Costo del Postre"));
alert("Revise los resltados en la consola presionando F12")
//Operacines
var suma = num1 + num2 + num3;
var igv = (suma * 0.18)+ suma

//Mostrar resultados
console.log("El costo de la entrada es:" + num1);
console.log("El costo del segundo es:" + num2);
console.log("El costo del postre es:" + num3);
console.log("El costo total es:" + suma)
console.log("El costo con IGV es:" + igv);

