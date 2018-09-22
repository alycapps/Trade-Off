module.exports = function(sequelize, DataTypes) {
  var UserBio = sequelize.define("userBio", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.TEXT,
      len: [0,250],
      msg: "Must be less than 250 characters."
    }
  });
  return UserBio;
};