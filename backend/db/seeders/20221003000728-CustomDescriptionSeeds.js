"use strict";

const CustomDescription = require("./generatrors/CustomDescriptions");
const configuration = require("./generatrors/Config");

const generatedCustomDescriptions = [];
const numberOfCustomDescriptions = configuration.maxCustomDescription;

for (let i = 0; i < numberOfCustomDescriptions; i++) {
  generatedCustomDescriptions.push(new CustomDescription());
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

    return queryInterface.bulkInsert(
      "CustomDescriptions",
      generatedCustomDescriptions,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.bulkDelete("CustomDescriptions", null, {});
  },
};
