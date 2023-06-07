"use strict";

const ThingsToDoTOThingsToDoListJoins = require("./generatrors/ThingsToDoToThingsTooDoListJoinsGenerator")
const {configuration} = require('./generatrors/Config')
const generatedListJoins = []
for (let i = 0; i < configuration.maxThingsToDoListTOthingsToDo; i++) {
  generatedListJoins.push(new ThingsToDoTOThingsToDoListJoins())
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "ThingsToDoTOThingsToDoListJoins",
      generatedListJoins,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete(
      "ThingsToDoTOThingsToDoListJoins",
      null,
      {}
    );
  },
};
