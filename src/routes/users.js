const express = require ("express");
const router = express.Router();


//Controller
const usersController = require ("../controllers/usersController.js");

// Middlewares
const uploadImageUser=require('../middlewares/uploadImageUser')
const validateRegister=require('../middlewares/validateRegister')
const userLoggedInMiddleware = require ('../middlewares/userLoggedInMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas
// Register Form
router.get('/register', userLoggedInMiddleware, usersController.register);


router.post("/", userLoggedInMiddleware, uploadImageUser.single('imageUser'),validateRegister,usersController.register);


// Login Form
router.get("/login", userLoggedInMiddleware, usersController.login);


// Procesar el login
router.post("/login", usersController.loginProcess);

// User Profile
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get("/logout", usersController.logout);

module.exports= router;