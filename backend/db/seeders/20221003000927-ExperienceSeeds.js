"use strict";

const { configuration } = require("./generatrors/Config");
const CustomExperiences = require("./generatrors/CustomExperiencesGenerator");
const generatedExperiences = []

for (let i = 0; i < configuration.maxExperiences; i++) {
  generatedExperiences.push(new CustomExperiences())
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Experiences",
			generatedExperiences,
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Experiences", null, {});
	},
};
