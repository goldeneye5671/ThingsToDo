"use strict";

const ThingsToDoTOThingsToDoListJoins = require("./generatrors/ThingsToDoToThingsTooDoListJoinsGenerator");
const configuration  = require("./generatrors/counter");
const generatedListJoins = [];
for (let i = 0; i < configuration.maxThingsToDoListTOthingsToDo; i++) {
	generatedListJoins.push(new ThingsToDoTOThingsToDoListJoins());
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"ThingsToDoTOThingsToDoListJoins",
			generatedListJoins,
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(
			"ThingsToDoTOThingsToDoListJoins",
			null,
			{}
		);
	},
};
