const validator=require('express-validator')

const valideteRegister=[
    validator.check('first_name')
        .notEmpty().withMessage('Tenés que ingresar un nombre'),
    validator.check('last_name')
        .notEmpty().withMessage('Tenés que ingresar un apellido'),
    validator.check('email')
        .notEmpty().withMessage('Tenés que ingresar un email').bail()
        .isEmail(),
    validator.check('password')
        .notEmpty().withMessage('Tenés que ingresar una contraseña')
        
]

module.exports=valideteRegister