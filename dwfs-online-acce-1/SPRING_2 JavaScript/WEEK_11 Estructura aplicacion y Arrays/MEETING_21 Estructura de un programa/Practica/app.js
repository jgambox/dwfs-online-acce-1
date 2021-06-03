/**Crear un script que permita ingresar solamente
 5 valores mediante prompt y nos muestre la
 suma total de todos los valores ingresados

 let valores = 0;
 let minValores = 5;
 for (i = 0; i < minValores; i++){
    valores += parseInt(prompt('Ingrese numero')); 
}
 alert(`la suma total ${valores}`);
 console.log(valores);

 let promedio = valores / minValores;
 alert(`El promedio es ${promedio}`);

 Ingresar N cantidad de edades mediante prompt
 hasta que se ingrese un cero.
 Al finalizar mostrar cuántos son mayores de edad


 let edades = -1;
 let mayoresEdad = 0;
 while (edades != 0){
    edades = (prompt('Ingrese su edad'));
    if (isNaN(edades)){
        alert('No es un numero');
    }else if (parseInt(edades) >= 18){
        mayoresEdad = mayoresEdad + 1;
        console.log("Cantidad mayores de edad: " + mayoresEdad);
    }
    
 }
 console.log("Cantidad mayores de edad: " + mayoresEdad);
 alert("Cantidad mayores de edad: " + mayoresEdad);*/


/**Ingresar N cantidad de números mediante prompt.
 Mostrar el promedio de los números ingresados de 1 dígito.
 Terminar el programa con la palabra “salir”

 let contador1Digito = 0;
 let promedio = 0;
 let sumaDigitos = 0;

 while (true) {
    input_num_digito = prompt('Ingrese digito !');

    if (isNaN(input_num_digito)) {
        if (input_num_digito === 'salir') {
            alert('Salida del sistema');
            break;
        }
    } else if (parseInt(input_num_digito) < 10 && parseInt(input_num_digito) > 0) {
        sumaDigitos = parseInt(input_num_digito) + sumaDigitos;
        contador1Digito = contador1Digito + 1;
    }
}
 promedio = sumaDigitos / contador1Digito;
 alert("Promedio numeros de 1 digito: " + promedio); */

/**
 * #5. Pares e impares
 *
 * Ingresar N cantidad de números mediante prompt.
 Mostrar quién tuvo más ingresos, si los pares o los impares
 Terminar el programa un 0.

 let stopValue = false;
 let sumEven = 0;
 let sumOdd = 0;

 while (!stopValue) {

    inputNumber = parseInt(prompt("ingresar N digitos"));

    if (inputNumber === 0) {
        stopValue = true;
    } else {
        if (inputNumber % 2 == 0) {
            sumEven = sumEven + 1;
        } else {
            sumOdd = sumOdd + 1;
        }
    }
}

 alert("cantidad de numero pares: " + sumEven + " Cantidad de numeros impares: " + sumOdd); */

/**
 * #6. De números a letras
 *
 * Ingresa un número entre 1 y 10 mediante prompt y
 transformarlo en su equivalente en el abecedario. Siendo 1 = a y 10 = j cualquier otro valor mostrar un
 mensaje de error. */

const mensaje_error = "Error numero fuera rango abecedario";

const number_to_leter = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j'
}

const input_value = prompt("Ingresar Digito a convertir Rango 1 a 10: ");

const abc_value = number_to_leter[input_value] || mensaje_error;

console.log("valor equivalente: " + abc_value);

alert("Valor equivalente del numero: " + input_value + " es: " + abc_value);