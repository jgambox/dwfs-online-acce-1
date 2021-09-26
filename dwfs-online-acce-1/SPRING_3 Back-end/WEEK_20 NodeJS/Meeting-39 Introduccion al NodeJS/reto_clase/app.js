const fs = require('fs');
const jsonObjet = require('./autos.json');

fs.writeFile('nuevoFile.txt', JSON.stringify(jsonObjet), (error) => {
    if (error) {
        return console.error(error);
    }
    console.log("json guardado");
});