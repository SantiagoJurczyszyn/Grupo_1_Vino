const express = require ("express");
const router = express.Router();

const usersController = require ("../controllers/usersController.js");
const uploadImageUser=require('../middlewares/uploadImageUser')
const validateRegister=require('../middlewares/valideteRegister')
const userLoggedInMiddleware = require ('../middlewares/userLoggedInMiddleware.js');

// formulario de registro
// PODRIAMOS AGREGAR userLoggedInMiddleware: 
// si el usuario estuvera loggeado no lo dejaRIA ir a register. Lo mandaRIA a shop
/*
router.get("/register", userLoggedInMiddleware, usersController.register);
*/
// ESTE ES EL QUE HIZO FACU,.QUEDA ASI , AL MENOS POR AHORA
router.get("/register", usersController.register);
router.post("/", userLoggedInMiddleware, uploadImageUser.single('imageUser'),validateRegister,usersController.register)

// formulario de login
// guestMiddleware: si el usuario esta loggeado no lo deja ir a loggin otra vez. Lo manda a shop
router.get("/login", userLoggedInMiddleware, usersController.login);

// esto se agrega para el login!
router.post("/login", usersController.loginProcess);

router.get("/logout", usersController.logout);


router.post("/products", usersController.login)

router.get("/:id", usersController.perfil);

module.exports= router;