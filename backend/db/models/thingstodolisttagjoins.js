'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThingsToDoListTagJoins = sequelize.define('ThingsToDoListTagJoins', {
    thingsToDoListId: DataTypes.INTEGER,
    thingsToDoListTagId: DataTypes.INTEGER
  }, {});
  ThingsToDoListTagJoins.associate = function(models) {
    // associations can be defined here
    ThingsToDoListTagJoins.belongsTo(models.ThingsToDoList, {
      foreignKey: "thingsToDoListId",
      onDelete: "CASCADE",
      hooks: true
    })
  };
  return ThingsToDoListTagJoins;
};
