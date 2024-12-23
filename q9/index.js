
// Synchronous

//writing a file 
import fs from 'fs'

const filePath = './file3'

fs.writeFileSync(filePath,'Synchronously writing in the file ')
console.log(`\n Mision Done, jo bola tha vo chap diya he (Synchronous writing done)`);

// appending data
fs.appendFileSync(filePath,'Appended data from there | koi shak ')
console.log('Mission Done, supplies recived (appened)');

// getting file info - statSync
const fileSatus = fs.statSync(filePath)
console.log(fileSatus);

// renaming the file
import path from 'path';
const fileName = path.basename(filePath)
const newFileName = 'file.txt'
fs.renameSync(fileName,newFileName)

// deleting the file
fs.unlinkSync(newFileName)
console.log('File deleted successfully!');

// making dir 
fs.mkdirSync(newFileName)
console.log('file created successfully');

//removing an empty dir 
fs.rmdirSync(newFileName)
console.log('file removed successfully');

