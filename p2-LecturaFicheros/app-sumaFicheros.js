const fs = require('fs');

fs.readFile('./num1.txt' , 'utf-8' , (err, data) =>{
  if(err) throw err;
  
});
fs.readFile('./num2.txt' , 'utf-8' ,(err, data)=>{
  if(err) throw err;

});


const resultado = parseInt(n1)+parseInt(n2);

console.log(`El resultado es: ${resultado}`); 