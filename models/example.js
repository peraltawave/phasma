module.exports = function (sequelize, DataTypes) {
  var Picture = sequelize.define("Picture", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: DataTypes.TEXT
  });
  return Picture;
};
