const path = require ("path");

const mainController = 
{
   
    index: (req,res) => {
        res.render("./main/index")
    },
    
    
    cart: (req,res) => {
        res.render("./main/cart")
    }


}

module.exports = mainController;