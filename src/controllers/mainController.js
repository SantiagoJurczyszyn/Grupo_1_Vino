const path = require ("path");

const mainController = 
{
    index: (req,res) => {
        res.render("./main/index")
    },
    shop: (req,res) => {
        res.render("./product/shop")
        },
    cart: (req,res) => {
        res.render("./main/cart")
    }
}

module.exports = mainController;