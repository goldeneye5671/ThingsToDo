"use strict";
module.exports = (sequelize, DataTypes) => {
  const ThingsToDoBusinessJoin = sequelize.define(
    "ThingsToDoBusinessJoin",
    {
      thingsToDoId: DataTypes.INTEGER,
      businessId: DataTypes.INTEGER,
    },
    {}
  );
  ThingsToDoBusinessJoin.associate = function (models) {
    // associations can be defined here
  };
  return ThingsToDoBusinessJoin;
};
