"use strict";

const configuration = require("./generatrors/counter");
const ThingsToDoBusinessJoins = require("./generatrors/ThingsToDoBusinessJoinsGenerator");

const generatedBusinessJoins = [];
const maxBusinessJoins = configuration.maxBusinessJoins;
const businessToThingToDoJoinsTracker = {};

for (let i = 0; i < maxBusinessJoins; i++) {
	/**
	 * {
	 *   1: (1,2,3),
	 *   2: (3,4,5),
	 *   3: (1,2,3)
	 * }
	 */

	const joins = new ThingsToDoBusinessJoins();

	if (!businessToThingToDoJoinsTracker[joins.businessId]) {
		businessToThingToDoJoinsTracker[joins.businessId] = new Set();
	}

	if (
		!businessToThingToDoJoinsTracker[joins.businessId].has(joins.thingsToDoId)
	) {
		businessToThingToDoJoinsTracker[joins.businessId].add(joins.thingsToDoId);
		generatedBusinessJoins.push(joins);
	}
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
