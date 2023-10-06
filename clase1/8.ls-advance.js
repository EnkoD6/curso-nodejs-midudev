const fs = require('node:fs');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    try{
        files = await fs.readdir(folder)
    } catch {
        console.error(`No se pudo leer el directorio: ${folder}`);
        process.exit(1);
    }
    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            const fileStats = await fs.stat(filePath) // status - información del archivo
        } catch (error) {
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(20)} ${file} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promises.all(filesPromises);

    filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder)