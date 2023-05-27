'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThingsToDo = sequelize.define('ThingsToDo', {
    thingName: {
      type: DataTypes.STRING(128),
      unique: true
    },
    thingDescription: DataTypes.TEXT,
  }, {});
  ThingsToDo.associate = function(models) {

    ThingsToDo.hasMany(models.Experience, {
      foreignKey: "thingToDoId"
    })

    ThingsToDo.hasMany(models.ThingRating, {
      foreignKey: "thingId"
    })

    ThingsToDo.hasMany(models.CustomDescription, {
      foreignKey: "thingToDoId"
    })

    ThingsToDo.belongsToMany(models.Business, {
      through: "ThingsToDoBusinessJoin",
      otherKey: "businessId",
      foreignKey: "thingsToDoId"
    })

    ThingsToDo.belongsToMany(models.ThingsToDoList, {
      through:"ThingsToDoTOThingsToDoListJoins",
      otherKey: "thingToDoListId",
      foreignKey: "thingToDoId"
    })
    // associations can be defined here
  };
  return ThingsToDo;
};
