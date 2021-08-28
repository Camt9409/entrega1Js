let numero1 = prompt("Ingrese un numero mayor a 10");
let numero2;



if (numero1 >= 10) {
    numero2 = prompt("Ingrese otro numero");
    let numero3 = parseInt(numero1)  + parseInt(numero2);
    alert("La suma de sus dos numeros es " + numero3);
}else{
    alert("Su numero no es mayor a 10");
}




