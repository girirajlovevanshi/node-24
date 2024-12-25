// Write code to upload multiple files using Multer in Express.js.

import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;

// Set storage engine
const storage = multer.diskStorage({
    // Destination to store files
    destination: (req, file, cb) => {
        // Uploads is the Upload_folder_name
        cb(null, 'uploads/');
    },
    // File name to store in database
    filename: (req, file, cb) => {
        // file.fieldname is name of the field (file) in the form
        // path.extname get the uploaded file extension
        // Date.now() is get the current timestamp
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
    });

// Upload instance to upload file in uploads folder
const upload = multer({ storage: storage });

// Middleware
app.use(express.static('public'));
app.post('/upload', upload.array('files', 5), (req, res) => {
    res.send('Files uploaded successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});