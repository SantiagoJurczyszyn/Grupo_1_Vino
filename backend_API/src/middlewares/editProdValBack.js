const validator = require('express-validator');
let db = require("../database/models");
const path=require("path")

const editProdValBack = [
    
    // obligatorio para el sprint 7
    
    validator.check('name')
    .isLength({min: 5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    validator.check('description')
    .isLength({min: 20}).withMessage('La descripción del producto debe tener 20 caracteres o más'),
 
    /* solo tendria que validar si cambió la imagen del producto */

   validator.check('imageProd')
    .custom((value, {req}) => {
        let file=req.file
        if (file)  {   
            if(!(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif"))
             {
                return false; // return "falsy" value to indicate invalid data 
            }
        }
        return true; // return "non-falsy" value to indicate valid data"
    })
    .withMessage("Solo se permite formato .gif, .png, .jpg y .jpeg"), // custom error message that will be send back if the file in not aN IMAGE. 

    // ademas validamos..

    // no valido los campos select porque creo que no podrian quedar vacios (al menos eso espero)
    // pero pierdo los valores si hay errores en otros campos. Pendiente de mejora en otra vida!

    validator.check('short_name')
    .isLength({min: 5, max:30}).withMessage("El nombre reducido del producto debe tener entre 5 y 30 caracteres"),
    validator.check('year')
    .notEmpty().withMessage('Tenés que ingresar un año comprendido entre 1900 y 2022').bail()
    .isInt({min: 1900, max: 2022}).withMessage("El año debe estar comprendido entre 1900 y 2022"),
    validator.check('price')
    .isFloat({min: 0.01}).withMessage('En el precio tenés que ingresar un valor mayor a 0'),
    validator.check('location')
    .notEmpty().withMessage('La ubicación del viñedo no puede estar vacía'),
    validator.check('altitude')
    .notEmpty().withMessage('Para altitud tenés que ingresar un número, puede ser 0'),
    validator.check('varietal_comp')
    .notEmpty().withMessage('La composición varietal no puede estar vacía'),
    validator.check('soil')
    .notEmpty().withMessage('La composición del suelo no puede estar vacía'),
    validator.check('abv')
    /*.notEmpty().withMessage('Tenés que ingresar una graduación alcohólica porcentual')*/
    .isFloat({min: 0 , max: 95}).withMessage("La graduación alcohólica debe estar entre 0 y 95%"),
    validator.check('breeding')
    .notEmpty().withMessage('La crianza no puede estar vacía, si es un vino joven indicar sin crianza')
   
]

module.exports =  editProdValBack;