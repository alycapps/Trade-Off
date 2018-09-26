module.exports = function(sequelize, DataTypes) {
  var UserBio = sequelize.define("UserBio", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.TEXT,
      len: [0, 250],
      msg: "Must be less than 250 characters."
    }
  });

  UserBio.associate = function(models) {
    UserBio.hasMany(models.Products, {
      onDelete: "cascade",
      constraints: true,
      foreignKey: {
        name: "userId"
      }
    });
};
  return UserBio;
};