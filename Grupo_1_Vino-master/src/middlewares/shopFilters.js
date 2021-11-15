const path = require("path");
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../database/products.json');
const productsToFilter = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const shopFilters = (req, res, next) => {
    if (req.query == null) {
        next()
    };
/*     if (req.query.filter == 'tintos' || 'blancos') {
        const products = productsToFilter.filter((prod) => {prod.type === req.query.filter});
        return res.render("./product/shop" , { products });
    };
    if (req.query.filter !== 'tintos' || 'blancos') {
        const products = productsToFilter.filter((prod) => {prod.type === req.query.filter});
        return res.render("./product/shop" , { products });
    }; */

}

module.exports = shopFilters