const path = require ("path");

const productController = 
{
    shop: (req,res) => {
    res.render("./products/shop")
},
    product: (req,res) => {
        res.render ("./products/product")
    },
    
    edit: (req,res) => {
        res.send ("Aquí podrás editar un producto")
    },
    list: (req,res) => {
        res.send ("Aquí se mostrará la lista de los productos existentes");
    },
    create: (req,res) => {
        res.send ("Acá podrás crear un producto")
    }
    
}

module.exports = productController;