
const fs = require('fs');

const sumaOper = calculator.sumar(10, 20);

console.log('Resultado suma: ', sumaOper);

const restaOper = calculator.resta(sumaOper, 10);
console.log('Resultado resta: ', restaOper);

const multiOper = calculator.multiplicar(restaOper, 8);
console.log('Resultado multiplicacion: ', multiOper);

const diviOper = calculator.dividir(multiOper, 5);
console.log('Resultado division:', diviOper);

let mensajeTXT = ``;

fs.writeFile("log.txt", "hola mundo \n", 'utf8', (err) => {
    if (err) console.log(err);
    console.log("operacion exitosa");
});