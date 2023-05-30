"use strict";
module.exports = (sequelize, DataTypes) => {
  const ExperiencePhoto = sequelize.define(
    "ExperiencePhoto",
    {
      experienceId: DataTypes.INTEGER,
      url: DataTypes.TEXT,
    },
    {}
  );
  ExperiencePhoto.associate = function (models) {
    ExperiencePhoto.belongsTo(models.Experience, {
      foreignKey: "experienceId",
    });
    // associations can be defined here
  };
  return ExperiencePhoto;
};
