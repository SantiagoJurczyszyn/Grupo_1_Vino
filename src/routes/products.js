const express = require ("express");
const router = express.Router();
// para subir archivos necesitamos multer
const multer = require ("multer");
const path = require('path')

const productsController = require ("../controllers/productsController.js");

// copio del pdf todo lo que Multer. Va aca, segun el video de playground 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, path.join(__dirname, '../../public/img/product-img'))
    },
    filename: function (req, file, cb) {
        // file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        const newFilename = 'viino-' + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
    }
    })
    var upload = multer({ storage: storage })

router.get("/", productsController.list);

/*** CREATE PRODUCT FORM ***/
router.get ("/create", productsController.create);
/*** CREATE PRODUCT ***/
router.post ("/",upload.single("imageProd"), productsController.create);

/*** GET ONE PRODUCT (DETAIL) ***/
router.get('/:id', productsController.product);

/*** EDIT PRODUCT FORM ***/
router.get('/:id/edit', productsController.edit);

/*** EDIT PRODUCT ***/
router.put('/:id', upload.single('imageProd'), productsController.update);

/*** DELETE PRODUCT ***/
router.delete ('/:id', productsController.destroy);


module.exports= router;