module.exports = function (sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,     //sequelize las lee de la base de datos, no es necesario poner TODAS si no las necesito.
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(250),
            allowNull: false
        }
        
        
};

    let config = {
        tableName: "users",
        timestamps: false
    }
    
    
    let User = sequelize.define (alias, cols, config);

    User.associate = function (models) {
        User.belongsToMany (models.Product, { 
                as: "user_Product",
                through: "user_product",
                foreignKey: "user_id",
                otherKey: "product_id",
                timestamps: false
        }),
        User.hasMany(models.Cart, {
            as: "user_cart",
            foreignKey: "user_id",
            timesptamps: false
        })
    };

    return User;
}