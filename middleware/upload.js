const multer = require('multer');
const path = require('node:path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(".", "public","client_documents"));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;