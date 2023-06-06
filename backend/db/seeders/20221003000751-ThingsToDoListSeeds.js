"use strict";

const ThingsToDoList = require("./generatrors/ThingsToDoListGenerator")
const {configuration} = require("./generatrors/Config")

const numberOfLists = configuration.maxThingsToDo;
const generatedLists = []

for (let i = 0; i < numberOfLists; i++) {
  generatedLists.push(new ThingsToDoList())
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */

    return queryInterface.bulkInsert(
      "ThingsToDoLists",
      generatedLists,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("ThingsToDoLists", null, {});
  },
};
