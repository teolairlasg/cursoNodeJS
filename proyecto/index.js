const fs = require('fs')
fs.readFileSync(
    './prueba.txt',
    'utf-8',
    (err, data) => {   //function(err,data){ 
        if (err) throw err
        console.log(`El contenido del fichero es este: ${data}`)
    })
console.log(`Aquí todavia no tenemos el valor de fs.readFile`)
