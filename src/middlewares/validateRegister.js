const validator = require('express-validator');
let db = require("../database/models");

const validateRegister = [
    validator.check('first_name')
        .notEmpty().withMessage('Tenés que ingresar un nombre')
        .isStrongPassword({ minLength: 0, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0 }).withMessage('Tenés que ingresar tu nombre comenzando con una mayúscula'),
    validator.check('last_name')
        .notEmpty().withMessage('Tenés que ingresar un apellido')
        .isStrongPassword({ minLength: 0, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0 }).withMessage('Tenés que ingresar tu apellido comenzando con una mayúscula'),
    validator.check('email')
        .notEmpty().withMessage('Tenés que ingresar un email').bail()
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

    validator.check('category')
        .notEmpty().withMessage('Tenés que elegir una categoría'),


    validator.check('password')
        .notEmpty().withMessage('Tenés que ingresar una contraseña').bail()
        .isStrongPassword({ minLength: 6, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos 6 caracteres").bail()
        .isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 0, minNumbers: 0, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos una letra minúscula").bail()
        .isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 0, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos una letra mayúscula").bail()
        .isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 }).withMessage("La contraseña tiene que incluir al menos un caracter que sea numérico").bail()
        .isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }).withMessage("La contraseña tiene que incluir al menos un caracter que sea un símbolo")
]

module.exports = validateRegister