const fs = require('node:fs');

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('segundo texto: ', text);
    })
console.log('Haciendo cosas mientras se lee el archivo');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('segundo texto: ', text);
    })