const express = require("express");
const router = express.Router();


//Controller
const usersController = require("../controllers/usersController.js");

// Middlewares
const uploadImageUser = require('../middlewares/uploadImageUser');
const validateRegister = require('../middlewares/validateRegister');
const validateLogin = require('../middlewares/validateLogin');
const userLoggedInMiddleware = require('../middlewares/userLoggedInMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas
// Register Form
// esta es la creacion de usuario
router.get('/register', userLoggedInMiddleware, usersController.register);

router.post("/", userLoggedInMiddleware, uploadImageUser.single('imageUser'), validateRegister, usersController.register);


// Login Form
router.get("/login", userLoggedInMiddleware, usersController.login);

// Procesar el login
router.post("/login", validateLogin, usersController.loginProcess);

// User Profile - aca muestro el detalle del usuario (y luego boton editar)
router.get('/profile', authMiddleware, usersController.profile);

// Actualizacion (Update) Pendiente: AGREGAR las mismas validaciones que para create
router.get("/editar/:id", usersController.editar);
router.put("/editar/:id", uploadImageUser.single('imageUser'), usersController.guardar);

// Logout
router.get("/logout", usersController.logout);

module.exports = router;