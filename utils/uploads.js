
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: './temp/uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload middleware and add file size limit
const upload = multer({
  storage: storage,
  // limits: { fileSize: 5 * 1024 * 1024 } // 1MB file size limit
}).single('resume'); // 'myFile' is the name attribute of the file input field


module.exports = upload