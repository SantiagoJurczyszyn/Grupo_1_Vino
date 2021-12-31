module.exports = function (sequelize, dataTypes) {
    let alias = "Producer";

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
        tableName: "producers",
        timestamps: false
    }
    
    
    let Producer = sequelize.define (alias, cols, config);

    Producer.associate = function (models) {
        Producer.hasMany (models.Product, { 
                as: "producer",
                foreignKey: "producer_id",
                timestamps: false
        })
    };

    return Producer;
}