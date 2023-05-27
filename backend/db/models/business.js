'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: DataTypes.STRING(128),
    primaryPhoto: DataTypes.TEXT,
    address: DataTypes.STRING(256),
    city: DataTypes.STRING(128),
    stateProvince: DataTypes.STRING(100),
    country: DataTypes.STRING(64),
    zipcode: DataTypes.INTEGER
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.hasMany(models.BusinessPhoto, {
        foreignKey: "businessId"
      })

    Business.belongsToMany(models.ThingsToDo, {
      through: "ThingsToDoBusinessJoins",
      otherKey: "thingsToDoId",
      foreignKey: "businessId"
    })
  };
  return Business;
};
