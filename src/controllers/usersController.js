const path = require ("path");

const userController = 
{
    register: (req,res) => {
        res.render ("./users/register")
    },

    login: (req,res) => {
        res.render("./users/login")
    },

    perfil: (req,res) => {
        res.send("Aquí podrás ver tu perfil")
    },
}

module.exports = userController;