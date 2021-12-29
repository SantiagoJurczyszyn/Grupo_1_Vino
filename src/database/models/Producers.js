module.exports = function (sequelize, dataTypes) {
    let alias = "Producers";

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
        tableName: "producer",
        timestamps: false
    }
    
    
    let Producers = sequelize.define (alias, cols, config);

    Producers.associate = function (models) {
        Producers.hasMany (models.Products, { 
                as: "producers",
                foreignKey: "producer_id",
                timestamps: false
        })
    };

    return Producers;
}