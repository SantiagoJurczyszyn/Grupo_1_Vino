module.exports = function (sequelize, dataTypes) {
    let alias = "Varietal";

    let cols = {
        id: {
            type: dataTypes.INTEGER,     //sequelize las lee de la base de datos, no es necesario poner TODAS si no las necesito.
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
};

    let config = {
        tableName: "varietal",
        timestamps: false
    }
    
    
    let Varietal = sequelize.define (alias, cols, config);

    Varietal.associate = function (models) {
        Varietal.hasMany (models.Products, { 
                as: "varietal",
                foreignKey: "varietal_id",
                timestamps: false
        })
    };

    return Type;
}