"use strict";

const configuration = require("./generatrors/counter")
const ThingsToDoListTagJoins = require('./generatrors/ThingsToDoListTagJoinsGenerator')

const generatedThingsToDoTagJoins = []
const numberOfJoins = configuration.maxThingsToDoTags

for (let i = 0; i < numberOfJoins; i++) {
  generatedThingsToDoTagJoins.push(new ThingsToDoListTagJoins())
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"ThingsToDoListTagJoins",
			generatedThingsToDoTagJoins,
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkDelete("ThingsToDoListTagJoins", null, {});
	},
};
