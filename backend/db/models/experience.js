'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    userId: DataTypes.INTEGER,
    thingToDoId: DataTypes.INTEGER,
    title: DataTypes.STRING(128),
    description: DataTypes.TEXT,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER
  }, {});
  Experience.associate = function(models) {
    Experience.belongsTo(models.User, {
      foreignKey: "userId"
    })

    Experience.belongsTo(models.ThingsToDo, {
      foreignKey: "thingToDoId"
    })

    Experience.hasMany(models.ExperiencePhoto, {
      foreignKey: "experienceId"
    })
    // associations can be defined here
  };
  return Experience;
};
