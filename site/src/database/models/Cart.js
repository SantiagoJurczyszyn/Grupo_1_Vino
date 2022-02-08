module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER,     //sequelize las lee de la base de datos, no es necesario poner TODAS si no las necesito.
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        item_qtty: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
};

    let config = {
        tableName: "carts",
        timestamps: false
    }
    
    
    let Cart = sequelize.define (alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsTo (models.Product, { 
                as: "cart_product",
                foreignKey: "product_id",
                timestamps: false
        }),
        Cart.belongsTo (models.User, {
            as: "cart_user",
            foreignKey: "user_id",
            timestamps: false
        })
    };

    return Cart;
}