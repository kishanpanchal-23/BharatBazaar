const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    // Destination to store image
    destination: function(req, file, cb){
        cb(null, '../frontend/public/images')
    } ,
    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
        // file.fieldname is name of the field (image)
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
 //  The fileFilter() method is for security reasons. I have validated files before it is uploaded to the 
 // servers. Here, it will accept only two extensions – .png and .jpg.

 module.exports = imageUpload ;