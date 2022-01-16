const validator = require('express-validator');
let db = require("../database/models");
const path=require("path")

const validateRegister = [
    validator.check('first_name')
        .isLength({ min: 2}).withMessage('Tenés que ingresar un nombre que contenga al menos dos letras')
        .isStrongPassword({ minLength: 0, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0 }).withMessage('Tenés que ingresar tu nombre comenzando con una mayúscula'),
    validator.check('last_name')
        .isLength({ min: 2}).withMessage('Tenés que ingresar un apellido que contenga al menos dos letras')
        .isStrongPassword({ minLength: 0, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0 }).withMessage('Tenés que ingresar tu apellido comenzando con una mayúscula'),
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
    validator.check('category')
    .notEmpty().withMessage('Tenés que elegir una categoría'),    
    validator.check('imageUser').custom((value,{req})=>{
        let file=req.file
        if (file) {
            let fileExtension=path.extname(file.originalname)
            let acceptedExtensions=[".jpg",".jpeg",".png",".gif"]
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ("El formato de la imagen debe ser JPG, JPEG, PNG o GIF");
            }   
        }
        
        return true
    })  
]

module.exports = validateRegister