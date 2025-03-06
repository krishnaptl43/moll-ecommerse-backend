const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/products')
    },
    filename: function (req, file, cb) {
        if (file.mimetype.includes("image")) {
            cb(null, `${file.fieldname+Date.now()}.jpg`)
        }
    }
})

const upload = multer({ storage: storage })

module.exports = upload;