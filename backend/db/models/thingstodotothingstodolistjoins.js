'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThingsToDoTOThingsToDoListJoins = sequelize.define('ThingsToDoTOThingsToDoListJoins', {
    thingToDoListId: DataTypes.INTEGER,
    thingToDoId: DataTypes.INTEGER
  }, {});
  ThingsToDoTOThingsToDoListJoins.associate = function(models) {
    // associations can be defined here
  };
  return ThingsToDoTOThingsToDoListJoins;
};