const validator = require('express-validator');
let db = require("../database/models");
const path = require("path")

const validateLogin = [
    validator.check('email')
        .notEmpty().withMessage('Tenés que ingresar un email')
        .isEmail().withMessage('Tenés que ingresar un email válido')
        // en el userController revisa si el email esta repetido
        // pero creo que es mejor hacerlo aca (si entiendo como)
        .custom(value => {
            return db.User.findOne({ where: { email: value } })
                .then(user => {
                    if (user) {
                        return Promise.reject('Este email ya esta registrado. Elegí otro');
                    }

                })
        }),
    validator.check('password')
        .isStrongPassword({ minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos 8 caracteres").bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 0, minNumbers: 0, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos una letra minúscula").bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 0, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos una letra mayúscula").bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos un caracter que sea numérico").bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }).withMessage("La contraseña tiene que incluir al menos un caracter que sea un símbolo"),
]

module.exports = validateLogin