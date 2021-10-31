const express = require ("express");
const router = express.Router();

const productController = require ("../controllers/productController.js");

router.get("/", productController.product);
router.get ("/edit", productController.edit);
router.get ("/create", productController.create);
router.get ("/list", productController.list);

module.exports= router;