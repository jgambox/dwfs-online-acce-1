/** #1. Stop
 *
 * Ingresar mediante prompt números indefinidamente hasta  que el usuario ingrese “Stop”.
 * Almacenar todos los datos en un array y mostrarlos al final.
 *


 let array_values = [];
 let input_char = "";

 while (input_char !== "stop") {

    input_char = prompt("ingresar valores: ");

    if (input_char === "stop") {
        alert("salida del programa");
        break;
    }

    if (!isNaN(input_char)) {
        array_values.push(parseInt(input_char));
    }
}

 console.log(array_values);  **/

/** #2. Dividir arrays
 *
 *  Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero).
 *
 *  Crear un array para los números pares, otro para los impares y un tercero para almacenar datos no
 *  numéricos. Mostrar los resultados al finalizar el ciclo.
 *


 let array_impares = [];
 let array_pares = [];
 let array_string = [];
 let input_char = "";

 while (input_char !== 0) {

    input_char = prompt("ingresar valores: ");

    if (parseInt(input_char) == 0){
        alert("salida programa");
        break;
    }

    if (!isNaN(input_char)) {
        if (parseInt(input_char) % 2 == 0) {
            array_pares.push(parseInt(input_char));
        } else {
            array_impares.push(parseInt(input_char));
        }
    }else {
        array_string.push(input_char);
    }
}

 console.log(array_pares);
 console.log(array_impares);
 console.log(array_string);  **/

/** #3. Eliminar extremos
 *
 *  Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero).
 *  Almacenar en un array solamente los números. Eliminar del array el número más alto y el más bajo.
 *
 **/

let array_numeros = [];

while (true) {

    input_char = prompt("ingresar valores: ");

    if (parseInt(parseInt(input_char)) == 0) {
        alert("salida programa");
        break;
    }

    if (!isNaN(input_char)) {
        array_numeros.push(parseInt(input_char));
    }
}

let size_array = array_numeros.length;
let num_mayor = 0;
let num_menor = array_numeros[0];
let index_temp_menor = 0;
let index_temp_mayor = 0;

for (let i = 0; i < size_array; i++) {
    if (array_numeros[i] > num_mayor) {
        num_mayor = array_numeros[i];
        index_temp_mayor = i;
    }
}

array_numeros.splice(index_temp_mayor, 1);

for (let i = 0; i < size_array; i++) {
    if (array_numeros[i] < num_menor) {
        num_menor = array_numeros[i];
        index_temp_menor = i;
    }
}
array_numeros.splice(index_temp_menor, 1);

console.log(array_numeros);

/** #4. Dividir Arrays
 *
 * Ingresar mediante prompt cualquier carácter hasta el ingreso de un 0 (cero).
 * Almacenar cada ingreso en una posición del array. Al finalizar dividir la cantidad de elementos en 3 arrays iguales
 *
 **/