
console.log('Cargando módulo de usuarios');
const user = require('./user.js');



const saludo = `Hola ${user.username}`
console.log(`Iniciando app...\n${saludo}`);