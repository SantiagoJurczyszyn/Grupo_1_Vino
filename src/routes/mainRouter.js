const express = require ("express");
const router = express.Router();

const mainController = require ("../controllers/mainController.js");

router.get("/", mainController.index);
router.get("/shop", mainController.shop);
router.get("/cart", mainController.cart);


module.exports= router;