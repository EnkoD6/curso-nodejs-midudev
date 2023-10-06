const fs = require('node:fs');
const { promisify } = require('node:util')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
});
console.log('Haciendo cosas mientras se lee el archivo');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text);
});