
// Write code to copy a file using Node.js.

import fs from 'fs'

const sourcePath = 'folder1/file1' //source path
const destinationPath = 'folder2/file1' //Destination path

try {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`File copied successfully from ${sourcePath} to ${destinationPath}`);
} catch (error) {
    console.error('Error while copying file:', error.message);
}
