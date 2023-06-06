"use strict";

const ThingsToDo = require("./generatrors/ThingsToDoGenerator");
const configuration = require("./generatrors/Config");

const numberOfThings = configuration.maxThingsToDoLists;
const generatedThings = [];

for (let i = 0; i < numberOfThings; i++) {
  generatedThings.push(new ThingsToDo());
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
    // {
    /*
     *  Backpacking
     *  Music Creation
     *  Learn An Instrument
     *  Learn A new Language
     *  Martial Arts
     *  Art Classes
     *  Soccer
     *  Football
     *  Rugby
     *  Cooking Classes
     *  Become a Social Media Influencer
     *  Hiking
     *  Visit a Park
     *  Learn a Programming Language
     *  Become a Pro Gamer
     *  Start a Business
     *  Become a Day Trader
     *  Car Maintenance
     */
    // }
    return queryInterface.bulkInsert("ThingsToDos", generatedThings, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("ThingsToDos", null, {});
  },
};
