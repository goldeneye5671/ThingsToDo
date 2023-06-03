"use strict";

const ThingsToDoListTags = require("./generatrors/ThingsToDoListTagsGenerator");

const numberOfTags = 20;
const generatedTags = [];

for (let i = 0; i < numberOfTags; i++) {
  generatedTags.push(new ThingsToDoListTags());
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */

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
