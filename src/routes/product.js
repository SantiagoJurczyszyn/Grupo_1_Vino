const express = require ("express");
const router = express.Router();
// para subir archivos necesitamos multer
const multer = require ("multer");
const path = require('path')

const productController = require ("../controllers/productController.js");

// copio del pdf todo lo que Multer. Va aca, segun el video de playground 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // no se si este path esta bien!
     cb(null, path.join(__dirname, '../../public/img/product-img'))
    },
    filename: function (req, file, cb) {
        // file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        const newFilename = 'viino-' + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
    }
    })
    var upload = multer({ storage: storage })

router.get("/", productController.list);

/*** CREATE PRODUCT FORM ***/
router.get ("/create", productController.create);

/*** GET ONE PRODUCT (DETAIL) ***/
router.get('/:id', productController.product);

/*** CREATE PRODUCT ***/
router.post ("/", productController.create);

/*** EDIT PRODUCT FORM ***/
router.get('/:id/edit', productController.edit);

/*** EDIT PRODUCT ***/
router.put('/:id', upload.single('imageProd'), productController.update);

/*** DELETE PRODUCT ***/
router.delete ('/:id')


module.exports= router;