'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThingsToDoList = sequelize.define('ThingsToDoList', {
    listName: DataTypes.STRING(128),
    listDescription: DataTypes.STRING(128),
    userId: DataTypes.INTEGER,
  }, {});
  ThingsToDoList.associate = function(models) {
    
    ThingsToDoList.belongsTo(models.User, {
      foreignKey: "userId",
    })
    
    ThingsToDoList.belongsToMany(
      models.ThingsToDo,
      {
        through:"ThingsToDoTOThingsToDoListJoins",
        otherKey: "thingToDoId",
        foreignKey: "thingToDoListId",
      }
    )

    ThingsToDoList.belongsToMany(
      models.ThingsToDoListTag, 
      {
        // through: {
        //   model:"ThingsToDoListTagJoins",
        //   attributes: ["createdAt", "updatedAt"]
        // },
        through: "ThingsToDoListTagJoins",
        otherKey: "thingsToDoListTagId",
        foreignKey: "thingsToDoListId",
      }
    )

    // ThingsToDoList.hasMany(models.ThingsToDoListTagJoins, {foreignKey: "thingsToDoListId", onDelete: 'CASCADE', hooks: true })
    // associations can be defined here
  };
  return ThingsToDoList;
};
