const path = require('node:path');

// \ barra en windows
// / barra en unix

// barra separadora segun OS
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);
const base = path.basename('/tmp/secreto/password.txt');
console.log(base);