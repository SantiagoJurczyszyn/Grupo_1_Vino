module.exports = function (sequelize, dataTypes) {
    let alias = "Type";

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
        tableName: "types",
        timestamps: false
    }
    
    
    let Type = sequelize.define (alias, cols, config);

    Type.associate = function (models) {
        Type.hasMany (models.Product, { 
                as: "type",
                foreignKey: "type_id",
                timestamps: false
        })
    };

    return Type;
}