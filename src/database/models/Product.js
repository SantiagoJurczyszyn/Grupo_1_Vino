module.exports = function (sequelize, dataTypes) {
  let alias = "Product";

  let cols = {
    id: {
      type: dataTypes.INTEGER, //sequelize las lee de la base de datos, no es necesario poner TODAS si no las necesito.
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    short_name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    producer_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: dataTypes.TEXT,
    },
    location: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    altitude: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    soil: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    abv: {
      type: dataTypes.DECIMAL(3, 1),
    },
    breeding: {
      type: dataTypes.TEXT,
    },
    varietal_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    varietal_comp: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };

  let config = {
    tableName: "products",
    timestamps: false,
  };

  let Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsToMany(models.User, {
      as: "product_user",
      through: "product_user ",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: false
    }),
      Product.belongsToMany(models.Winemaker, {
        as: "Winemaker",
        through: "winemaker_product",
        foreignKey: "product_id",
        otherKey: "winemaker_id",
        timestamps: false,
      }),

      Product.belongsTo(models.Producer, {
        as: "product_producer",
        foreignKey: "producer_id",
        timestamps: false,
      }),
      Product.belongsTo(models.Type, {
        as: "product_type",
        foreignKey: "type_id",
        timestamps: false,
      }),
      Product.belongsTo(models.Varietal, {
        as: "product_varietal",
        foreignKey: "varietal_id",
        timestamps: false,
      }),

      Product.hasMany(models.Image, {
        as: "product_image",
        foreignKey: "product_id",
        timestamps: false,
      }),
      Product.hasMany(models.Cart, {
        as: "product_cart",
        foreignKey: "product_id",
        timestamps: false,
      });
  };

  return Product;
};
