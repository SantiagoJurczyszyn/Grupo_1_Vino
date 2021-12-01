const express = require ("express");
const router = express.Router();

const usersController = require ("../controllers/usersController.js");
const uploadImageUser=require('../middlewares/uploadImageUser')
const validateRegister=require('../middlewares/valideteRegister')

router.get("/register", usersController.register);
router.post("/", uploadImageUser.single('imageUser'),validateRegister,usersController.register)

router.get("/login", usersController.login);
router.post("/products", usersController.login)

router.get("/:id", usersController.perfil);

module.exports= router;