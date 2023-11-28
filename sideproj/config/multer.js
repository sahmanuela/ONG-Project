const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = "./public/uploads"
        cb(null, path)
    },
    filename: (req, file, cb) => {
        let nome = Date.now()+"_"+file.originalname;
        cb(null, nome);
    }
});

const upload = multer({storage});
module.exports = upload;
