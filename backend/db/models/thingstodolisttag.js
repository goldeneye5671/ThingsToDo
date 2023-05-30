"use strict";
module.exports = (sequelize, DataTypes) => {
  const ThingsToDoListTag = sequelize.define(
    "ThingsToDoListTag",
    {
      name: DataTypes.STRING(128),
    },
    {}
  );
  ThingsToDoListTag.associate = function (models) {
    ThingsToDoListTag.belongsToMany(models.ThingsToDoList, {
      through: "ThingsToDoListTagJoins",
      otherKey: "thingsToDoListId",
      foreignKey: "thingsToDoListTagId",
    });

    // associations can be defined here
  };
  return ThingsToDoListTag;
};
