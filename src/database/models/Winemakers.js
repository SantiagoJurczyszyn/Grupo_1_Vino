module.exports = function (sequelize, dataTypes) {
    let alias = "Winemakers";

    let cols = {
        id: {
            type: dataTypes.INTEGER,     //sequelize las lee de la base de datos, no es necesario poner TODAS si no las necesito.
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
};

    let config = {
        tableName: "winemaker",
        timestamps: false
    }
    
    
    let Winemakers = sequelize.define (alias, cols, config);

    Winemakers.associate = function (models) {
        Winemakers.belongsToMany (models.Products, { 
                as: "winemakers_products",
                through: "winemaker_product",
                foreignKey: "winemaker_id",
                otherKey: "product_id",
                timestamps: false
        })
    };

    return Winemakers;
}