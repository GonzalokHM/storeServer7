const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'shop7',
        allowedFormats: ['jpg', 'jpeg', 'png', 'gif']
    
    }
})

const upload = multer({storage})

module.exports = upload 