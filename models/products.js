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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    }
  });

  Products.associate = function(models) {
    Products.belongsTo(models.User, {
      foreignKey: {
        name: "userId"
      }
    });
  };
  return Products;
};