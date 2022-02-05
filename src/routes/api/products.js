const express=require("express")
const router=express.Router()
const products = require("../../controllers/api/products")

// la ruta indicada en el Sprint es api/products/ (creo que asi estara bien!)
router.get("/",products.list);

router.get("/:id", products.detail);

module.exports=router