"use strict";
module.exports = (sequelize, DataTypes) => {
  const thingRatings = sequelize.define(
    "ThingRating",
    {
      userId: DataTypes.INTEGER,
      thingId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
    },
    {}
  );
  thingRatings.associate = function (models) {
    // associations can be defined here
    thingRatings.belongsTo(models.ThingsToDo, {
      foreignKey: "thingId",
    });

    thingRatings.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return thingRatings;
};
