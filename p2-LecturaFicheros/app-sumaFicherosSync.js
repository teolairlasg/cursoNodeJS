const fs = require('fs');

const n1 =fs.readFileSync('./num1.txt' , 'utf-8' , 'r');
const n2 = fs.readFileSync('./num2.txt' , 'utf-8' ,'r');
const resultado = parseInt(n1)+parseInt(n2);

console.log(`El resultado es: ${resultado}`); 