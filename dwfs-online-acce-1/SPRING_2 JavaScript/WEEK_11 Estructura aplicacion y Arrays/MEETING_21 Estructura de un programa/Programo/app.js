let numeroRandom = Math.floor((Math.random() * 100) + 1),
    numeroUsuario = prompt('Ingrese Número:');

console.log(numeroRandom);

for (;;) {

    numeroUsuario = prompt('Ingrese Número:');

    if (isNaN(numeroUsuario)) {
        alert('No es un número');
    } else if (parseInt(numeroUsuario) === 0) {
        alert('Es un número y es 0');
        break;
    } else if (parseInt(numeroUsuario) > numeroRandom) {
        alert('Es mayor al número a Adivinar');
    } else if (parseInt(numeroUsuario) < numeroRandom) {
        alert('Es menor al número a Adivinar');
    } else {
        alert('Es igual a num a Adivinar');
        break;
    }
}