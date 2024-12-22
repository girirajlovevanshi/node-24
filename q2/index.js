
//Provide code to delete a file in Node.js using the fs module.


import { log } from 'console'
import fs from 'fs'


// syncronasss way

const filePath1 = './file1'

try{
    fs.unlinkSync(filePath1)
    console.log('file1 deletion success')
}catch(err){
    console.log('unable to delete file1 ',err);
    
}

// asyncronasss way

const filepath2 = './file2'

fs.unlink(filepath2,(err)=>{
    if(err){
        console.error('unable to delete file2');
            
    }
    console.log('file2 deleted succefully');
        
})


// promices  async await

import fsPro from 'fs/promises'

const filePath3 = './file3'

const deleteFile = async (path)=>{
    try {
        await fsPro.unlink(path)
        console.log('file3 delete successfully');
        
    } catch (error) {
        console.log('unable to delete file 3');
        
    }
}

deleteFile(filePath3)
