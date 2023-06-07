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
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkDelete("Experiences", null, {});
	},
};
