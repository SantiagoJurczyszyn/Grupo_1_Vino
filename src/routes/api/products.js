const express=require("express")
const router=express.Router()
const productsListAPIController=require("../../controllers/api/productsListAPIController")

// la ruta indicada en el Sprint es api/products/ (creo que asi estara bien!)
router.get("/",productsListAPIController.list)

module.exports=router