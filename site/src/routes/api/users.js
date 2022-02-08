const express=require("express")
const router=express.Router()
const usersAPIControllers=require("../../controllers/api/usersAPIControllers")


router.get("/",usersAPIControllers.list)
router.get("/:id", usersAPIControllers.detail)

module.exports=router