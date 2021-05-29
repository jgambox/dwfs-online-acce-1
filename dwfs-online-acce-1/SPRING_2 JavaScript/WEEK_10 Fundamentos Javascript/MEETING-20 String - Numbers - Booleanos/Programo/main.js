function ejercicio1() {
    let numero_1 = prompt("ingresa numero 1: ");
    numero_1 = numero_1 ?? 0;
    let numero_2 = prompt("ingresa numero 2: ");
    numero_1 = numero_2 ?? 0;
    let suma = parseInt(numero_1) + parseInt(numero_2);
    alert("total_Suma: " + suma);
}

function ejercicio21() {
    let KM_recorrer = prompt("Ingresar kilometros a recorrer");
    const capacidad_litros = 45;
    const rendimiento_kml = 15;
    const autonomia_max = capacidad_litros * rendimiento_kml;

    if (parseInt(KM_recorrer) > autonomia_max) {
        alert("Debe abastecerse");
    } else {
        alert("Sí recorrerá distnacia");
    }
}


function ejercicio22() {
    let modelo_motor = prompt("modelo del motor", "ex: 1.6 or 1.8 or 2.0");
    let km_recorrer = prompt("kilometros a recorrer");

    let capacidad_litros = 50;

    let rendimiento_model16 = 15;
    let rendimiento_model18 = 12;
    let rendimiento_model20 = 10;

    let autonomia_model_16 = capacidad_litros * rendimiento_model16;
    let autonomia_model_18 = capacidad_litros * rendimiento_model18;
    let autonomia_model_20 = capacidad_litros * rendimiento_model20;

    let num_tanques;
    let part_decimal;
    let recorrido_litros;

    if (modelo_motor === "1.6") {
        if (km_recorrer <= autonomia_model_16) {
            num_tanques = 1;
            recorrido_litros = 1;
            part_decimal = 0;
        } else {
            num_tanques = parseInt(km_recorrer) / autonomia_model_16;
            recorrido_litros = num_tanques;
            part_decimal = num_tanques % 1;
            if (part_decimal > 0) {
                num_tanques += 1;
            }
        }
        alert("Modelo 1.6 Numero de tanques: " + Math.floor(num_tanques) +
            " tanques" + " y litros necesarios: " +
            (recorrido_litros * capacidad_litros) + " Litros");
    } else if (modelo_motor === "1.8") {
        if (km_recorrer <= autonomia_model_18) {
            num_tanques = 1;
            recorrido_litros = 1;
            part_decimal = 0;
        } else {
            num_tanques = parseInt(km_recorrer) / autonomia_model_18;
            recorrido_litros = num_tanques;
            part_decimal = num_tanques % 1;
            if (part_decimal > 0) {
                num_tanques += 1;
            }
        }
        alert("Modelo 1.8 Numero de tanques: " + Math.floor(num_tanques) +
            " tanques" + " y litros necesarios: " +
            (recorrido_litros * capacidad_litros) + " Litros");
    } else if (modelo_motor === "2.0") {
        if (km_recorrer <= autonomia_model_20) {
            num_tanques = 1;
            recorrido_litros = 1;
            part_decimal = 0;
        } else {
            num_tanques = parseInt(km_recorrer) / autonomia_model_20;
            recorrido_litros = num_tanques;
            part_decimal = num_tanques % 1;
            if (part_decimal > 0) {
                num_tanques += 1;
            }
        }
        alert("Modelo 2.0 Numero de tanques: " + Math.floor(num_tanques) +
            " tanques" + " y litros necesarios: " +
            (recorrido_litros * capacidad_litros) + " Litros");
    } else {
        alert("Por favor ingrese un numero de modelo valido");
    }
}

function ejercicio3() {

}