"use strict";

const ThingRatings = require("./generatrors/ThingRatingsGenerator");
const configuration = require("./generatrors/counter");
const generatedThingRatings = [];

for (let i = 0; i < configuration.maxThingRatings; i++) {
	generatedThingRatings.push(new ThingRatings());
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("ThingRatings", generatedThingRatings, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("ThingRatings", null, {});
	},
};
