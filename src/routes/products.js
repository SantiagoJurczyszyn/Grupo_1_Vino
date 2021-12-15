const express = require ("express");
const router = express.Router();
// Controller
const productsController = require ("../controllers/productsController.js");

// Middleware

const upload = require('../middlewares/upload');



/*** SHOP ***/
router.get("/", productsController.list);

/*** CREATE PRODUCT FORM ***/
router.get ("/create", productsController.create);


/*** CREATE PRODUCT ***/
router.post ("/",upload.single("imageProd"), productsController.create);

/*** GET ONE PRODUCT (DETAIL) ***/
router.get('/:id', productsController.detail);

/*** EDIT PRODUCT FORM ***/
router.get('/:id/edit', productsController.edit);

/*** UPDATE PRODUCT ***/
router.put('/:id', upload.single('imageProd'), productsController.update);

/*** DELETE PRODUCT ***/
router.delete ('/:id', productsController.destroy);


module.exports= router;