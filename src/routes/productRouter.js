const express = require ("express");
const router = express.Router();

const productController = require ("../controllers/productController.js");

router.get("/", productController.product);

router.get ("/list", productController.list);

/*** GET ONE PRODUCT (DETAIL) ***/
/** agrego esta para probar mostrar antes de hacer el edit */

// NO ENTIENDO PORQUE desaparece back arrow cuando agrego :id a la ruta
router.get('/:id', productController.product);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productController.edit);

/*** SUBMIT EDIT ONE PRODUCT ***/
/** por ahora sin cambiar la imagen */
router.put('/edit/:id', productController.update);
//router.put('/:id', upload.single('image'), productsController.update);
/** esta seria mi parte! */

router.get ("/create", productController.create);

module.exports= router;