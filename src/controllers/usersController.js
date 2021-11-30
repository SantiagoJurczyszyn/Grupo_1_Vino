const path = require ("path");
const fs = require("fs");
const usersImagePath = path.join(__dirname, "../../public/img/users-img");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const {validationResult} = require ("express-validator");

const usersController = 
{
    register: (req,res) => {
        if (req.method == "GET") {         // Si el metodo es GET muestra el formulario de registro de usuario
            res.render("./users/register");
          } else {                           // Si el método es POST crea un usuario nuevo
            const newUser = {
              id: users[users.length - 1].id + 1,
              // Reutilizamos todas las props que vienen en el body con el spread operator
              ...req.body,
              image: req.file ? req.file.filename : "generic.png ", //si no viene una imagen cargo una genérica
            };
      
            // Se agrega el nuevo usuario al array de productos y se reescribe el JSON
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
      
            res.redirect("/");
         }

    },



    login: (req,res) => {
        if (req.method == "GET") {         // Si el metodo es GET muestra el formulario de login
            res.render("./users/login");
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

        res.render("perfil", userId)
        
    }
}

module.exports = usersController;