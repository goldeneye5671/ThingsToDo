"use strict";

const configuration = require("./generatrors/counter");
const Businesses = require("./generatrors/BusinessGenerator");

const generatedBusinesses = [];
const numberOfBusinesses = configuration.maxBusinesses;

for (let i = 0; i < numberOfBusinesses; i++) {
	generatedBusinesses.push(new Businesses());
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Businesses", generatedBusinesses, {});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkDelete("Businesses", null, {});
	},
};
