"use strict";

const ThingsToDoListTags = require("./generatrors/ThingsToDoListTagsGenerator");
const configuration = require("./generatrors/counter");

const numberOfTags = configuration.maxThingsToDoTags;
const generatedTags = [];

for (let i = 0; i < numberOfTags; i++) {
	generatedTags.push(new ThingsToDoListTags());
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("ThingsToDoListTags", generatedTags, {});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
		return queryInterface.bulkDelete("ThingsToDoListTags", null, {});
	},
};
