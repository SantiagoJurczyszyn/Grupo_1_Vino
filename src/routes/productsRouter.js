const express = require ("express");
const router = express.Router();

const productsController = require ("../controllers/productsController.js");

router.get("/", productsController.product);
router.get ("/shop", productsController.shop);
router.get ("/edit", productsController.edit);
router.get ("/create", productsController.create);
router.get ("/list", productsController.list);

module.exports= router;