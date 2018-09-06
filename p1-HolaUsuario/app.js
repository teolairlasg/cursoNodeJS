console.log("Iniciando app");
const fs = require('fs'); //Los requires son síncronos.
fs.appendFile(
  'saludo.txt',
  'Hola usuario',
  (err) => {
    if (err) console.log(`Ha ocurrido un error: ${err}`);
  }
);

//En síncrono
try {
  fs.appendFileSync('saludo.txt', 'Hola usuario síncrono');
} catch (err) {
  if (err) console.log(`Ha ocurrido un error: ${err}`);
}