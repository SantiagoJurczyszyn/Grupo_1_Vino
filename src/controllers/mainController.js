const path = require ("path");

const mainController = 
{
    intro: (req,res) => {
        res.render ("intro")
    },

    index: (req,res) => {
        res.render("index")
    }
}

module.exports = mainController;