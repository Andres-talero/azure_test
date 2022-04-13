require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');

const config = require('config');


const azureStorage = require('azure-storage');
const blobService = azureStorage.createBlobService();
const containerName = 'imagenes';


const getStream = require('into-stream');

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, '');
    return `${identifier}-${originalName}`;
}

app.post('/upload', uploadStrategy, async (req, res) => {
    const blobName = getBlobName(req.file.originalname);
    const stream = getStream(req.file.buffer);
    const streamLength = req.file.buffer.length;

    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {
        if(err){
            console.log(err);
            return;
        }

        res.status(200).send('Archivo subido');
});

app.get('/all', async (req, res) => {
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;