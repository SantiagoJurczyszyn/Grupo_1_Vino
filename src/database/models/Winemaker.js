module.exports = function (sequelize, dataTypes) {
    let alias = "Winemaker";

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
        tableName: "winemakers",
        timestamps: false
    }
    
    
    let Winemaker = sequelize.define (alias, cols, config);

    Winemaker.associate = function (models) {
        Winemaker.belongsToMany (models.Product, { 
                as: "winemaker_Product",
                through: "winemaker_product",
                foreignKey: "winemaker_id",
                otherKey: "product_id",
                timestamps: false
        })
    };

    return Winemaker;
}