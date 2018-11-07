module.exports = function(sequelize, DataTypes) {
  var Petlist = sequelize.define("Petlist", {
    pet_id: DataTypes.INTEGER,
    pet_name: DataTypes.STRING,
    pet_type:{
      type:DataTypes.STRING,
      allowNull:false},
    pet_description: DataTypes.TEXT,
  });
  return Petlist;
};
// this is important