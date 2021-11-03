const express = require ("express");
const router = express.Router();

const productController = require ("../controllers/productController.js");

router.get("/", productController.product);
router.get ("/list", productController.list);
router.get ("/edit/:id", productController.edit);
router.get ("/create", productController.create);

module.exports= router;