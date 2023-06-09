"use strict";
const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	const ExperiencePhoto = sequelize.define(
		"ExperiencePhoto",
		{
			experienceId: DataTypes.INTEGER,
			photoId: DataTypes.INTEGER,
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

	ExperiencePhoto.addHook("beforeCreate", async (photo) => {
		const maxPhotoId = await ExperiencePhoto.max("photoId", {
			where: { experienceId: photo.experienceId },
		});
		photo.photoId = maxPhotoId ? maxPhotoId + 1 : 1;
	});

	ExperiencePhoto.addHook("afterDestroy", async (photo, options) => {
		
    console.log("Running beforeDestroy")
    await ExperiencePhoto.decrement("photoId", {
			where: {
				experienceId: photo.experienceId,
				photoId: { [Op.gt]: photo.photoId },
			},
			by: 1,
			transaction: options.transaction,
		});
	});
	return ExperiencePhoto;
};
