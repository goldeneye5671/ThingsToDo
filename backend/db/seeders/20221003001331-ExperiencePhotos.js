"use strict";

const configuration = require("./generatrors/counter");
const ExperiencePhotos = require("./generatrors/CustomExperiencePhotos");
const generatedExperiencePhotos = [];

for (let i = 0; i < configuration.maxExperiencePhotos; i++) {
	generatedExperiencePhotos.push(new ExperiencePhotos(`https://placehold.co/600x400?text=Hello+World`));
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"ExperiencePhotos",
			generatedExperiencePhotos,
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("ExperiencePhotos", null, {});
	},
};
