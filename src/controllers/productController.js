const path = require ("path");

const productController = 
{
    shop: (req,res) => {
    res.render("shop")
},
    product: (req,res) => {
        res.render ("./products/product")
    },
    
    cart: (req,res) => {
        res.render("cart")
    }

    
}

module.exports = productController;