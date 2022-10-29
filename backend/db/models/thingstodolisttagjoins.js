'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThingsToDoListTagJoins = sequelize.define('ThingsToDoListTagJoins', {
    thingsToDoListId: DataTypes.INTEGER,
    thingsToDoListTagId: DataTypes.INTEGER
  }, {});
  ThingsToDoListTagJoins.associate = function(models) {
    // ThingsToDoListTagJoins.belongsTo(models.ThingsToDoList,
    //   {
    //     foreignKey: "thingsToDoListId"
    //   })
    // associations can be defined here
  };
  return ThingsToDoListTagJoins;
};
