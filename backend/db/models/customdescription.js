'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomDescription = sequelize.define('CustomDescription', {
    userId: DataTypes.INTEGER,
    thingToDoId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER
  }, {});
  CustomDescription.associate = function(models) {
    CustomDescription.belongsTo(models.User, {
      foreignKey: "userId"
    })

    CustomDescription.belongsTo(models.ThingsToDo, {
      foreignKey: "thingToDoId"
    })
    // associations can be defined here
  };
  return CustomDescription;
};
