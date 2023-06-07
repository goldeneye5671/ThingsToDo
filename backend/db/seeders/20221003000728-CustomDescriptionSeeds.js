"use strict";

const CustomDescription = require('./generatrors/CustomDescriptionsGenerator');
const configuration = require("./generatrors/counter");

const generatedCustomDescriptions = [];
const numberOfCustomDescriptions = configuration.maxCustomDescriptions;

for (let i = 0; i < numberOfCustomDescriptions; i++) {
	generatedCustomDescriptions.push(new CustomDescription());
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"CustomDescriptions",
			generatedCustomDescriptions,
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("CustomDescriptions", null, {});
	},
};
