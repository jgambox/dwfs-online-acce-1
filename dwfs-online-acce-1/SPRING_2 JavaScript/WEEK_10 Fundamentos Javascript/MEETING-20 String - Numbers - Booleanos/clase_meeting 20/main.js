const salarioMinimo = 950000;
const ingresos = prompt("Ingrese sus ingresos");

const topDosSalariosMinimo = salarioMinimo * 2
const topTresSalariosMinimo = salarioMinimo * 3

const ingresosNumero = parseInt(ingresos);

if (ingresosNumero <= salarioMinimo) {
    alert("El valor es menor o igual al salario minimo");
} else if (ingresosNumero > salarioMinimo && ingresosNumero <= topDosSalariosMinimo) {
    alert("Esta en el rango de salarioMinimo y topDosSalariosMinimo");
} else if (ingresosNumero > topDosSalariosMinimo && ingresosNumero <= topTresSalariosMinimo) {
    alert("Esta en el rango de topDosSalarioMinimo y topTresSalariosMinimo");
} else {
    alert("El valor es mayor a topTresSalariosMinimo");
}

