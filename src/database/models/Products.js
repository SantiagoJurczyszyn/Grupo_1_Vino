module.exports = function (sequelize, dataTypes) {
  let alias = "Products";

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
    breading: {
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

  let Products = sequelize.define(alias, cols, config);

  Products.associate = function (models) {
    Products.belongsToMany(models.Users, {
      as: "products_users",
      through: "product_user ",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: false
    }),
      Products.belongsToMany(models.Winemakers, {
        as: "products_winemakers",
        through: "winemaker_product",
        foreignKey: "product_id",
        otherKey: "winemaker_id",
        timestamps: false,
      }),

      Products.belongsTo(models.Producers, {
        as: "prod_producers",
        foreignKey: "producer_id",
        timestamps: false,
      }),
      Products.belongsTo(models.Type, {
        as: "prod_type",
        foreignKey: "type_id",
        timestamps: false,
      }),
      Products.belongsTo(models.Varietal, {
        as: "prod_varietal",
        foreignKey: "varietal_id",
        timestamps: false,
      }),

      Products.belongsTo(models.Image, {
        as: "prod_im",
        foreignKey: "product_id",
        timestamps: false,
      }),
      Products.hasMany(models.Cart, {
        as: "prod_cart",
        foreignKey: "product_id",
        timestamps: false,
      });
  };

  return Products;
};
