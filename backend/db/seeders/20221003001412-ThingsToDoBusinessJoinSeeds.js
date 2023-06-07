"use strict";

const { configuration } = require("./generatrors/Config");
const ThingsToDoBusinessJoins = require("./generatrors/ThingsToDoBusinessJoinsGenerator");

const generatedBusinessJoins = [];
const maxBusinessJoins = configuration.maxBusinessJoins;

for (let i = 0; i < maxBusinessJoins; i++) {
	generatedBusinessJoins.push(new ThingsToDoBusinessJoins());
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"ThingsToDoBusinessJoins",
			generatedBusinessJoins,
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("ThingsToDoBusinessJoins", null, {});
	},
};
