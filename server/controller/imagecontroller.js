const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    // Destination to store image
    destination: function(req, file, cb){
        cb(null, '../frontend/public/images')
    } ,
    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
        // path.extname get the uploaded file extension 
    }
});

//  The multer() method takes an object with storage property.
//  The limits property describes the maximum size of the file.
const imageUpload  = multer({
    storage : imageStorage,
    limits:{
        fileSize: 1000000 // 1000000 Bytes = 1 MB 
    }
})

 module.exports = imageUpload ;