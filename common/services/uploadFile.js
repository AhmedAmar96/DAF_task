const fs = require('fs');
const path = require('path');
const multer = require('multer');
const csv = require('fast-csv');

let storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage: storage
});

module.exports = upload;