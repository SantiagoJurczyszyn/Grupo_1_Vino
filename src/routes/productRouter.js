const express = require ("express");
const router = express.Router();

const productController = require ("../controllers/productController.js");

router.get("/", productController.product);
router.get ("/shop", productController.shop);
router.get("/cart", productController.cart);

module.exports= router;