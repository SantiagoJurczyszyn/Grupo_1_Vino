const path = require ("path");
const fs = require("fs");
const usersImagePath = path.join(__dirname, "../../public/img/users-img");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const {validationResult} = require ("express-validator");
const bcryptjs=require('bcryptjs')
const usersController = 
{
    register: (req,res) => {
        
            const validation=validationResult(req)
            if (req.method == "GET") {         // Si el metodo es GET muestra el formulario de registro de usuario
                  return res.render("../views/users/register");
            } 
          
            else if // Si el usuario quiere registarse, pero ya lo hizo, se le informa que no debe registrarse nuevamente
            (users.find(usuario=>usuario.email==req.body.email)) {
            return res.render("users/register",{recordatorio:"Ya se había registrado previamente, inicia sesión con la contraseña ingresada oportunamente"})
            } 
          
            else if //Si el usuario quiere registarse, pero no cumple con los requisitos de registración, los mismos son informados
            (!validation.isEmpty()) {
            const errors=validation.mapped()
            const oldData=req.body
            return res.render("users/register",{errors,oldData})
            }  
          
            else {                           // Si completa correctamente el formulario, el usuario es ingresado a la basa de datos
            const newUser = {
            id: users[users.length - 1].id + 1,
            // Reutilizamos todas las props que vienen en el body con el spread operator
            ...req.body,
            password:bcryptjs.hashSync(req.body.password,10),
            category:"user",
            image: req.file ? req.file.filename : "generic.png ", //si no viene una imagen cargo una genérica
            };
    
            // Se agrega el nuevo usuario al array de productos y se reescribe el JSON
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
            
            res.redirect("/users/login"); //se redirige el usuario a la vista de login
          }

    },



    login: (req,res) => {
        if (req.method == "GET") {         // Si el metodo es GET muestra el formulario de login
            res.render("../views/users/login");
          } else {                           // Si el método es por POST lo logea

             // Antes de crear la cookie pregunto si se seleccionó la opción con un if
        if (results?.rememberUser) { // con el ? evalua y si es nulo ya no evalúa siquiera
            // Guardo color en cookie
            res.cookie ("usuarioSeleccionado", req.body.usuarioSeleccionado);   // puedo usar un {maxAge: tiempo en ms para guardar}
             }
            res.redirect("/"); //redirijo al home
         }

    },

    perfil: (req,res) => { //recibe un id por parametro y muestra ese perfil pero SOLO si está logueado
        
        let userId = req.params.id;

        res.render("../views/users/perfil", userId)
        
    }
}

module.exports = usersController;