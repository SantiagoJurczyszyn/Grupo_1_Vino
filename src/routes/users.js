const express = require ("express");
const router = express.Router();

const usersController = require ("../controllers/usersController.js");

router.get("/register", usersController.register);
router.post("/", usersController.register)

router.get("/login", usersController.login);
router.post("/", usersController.login)

router.get("/:id", usersController.perfil);

module.exports= router;