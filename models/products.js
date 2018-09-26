module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    price: {
      type: DataTypes.INTEGER,
      isInt: true,
      allowNull: false
    },
    negotiable: {
      type: DataTypes.BOOLEAN
    },
    barter: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 300]
      }
    },
  });

  Products.associate = function(models) {
    Products.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
  };
  return Products;
};