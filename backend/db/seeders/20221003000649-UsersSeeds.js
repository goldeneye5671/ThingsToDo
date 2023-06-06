"use strict";

const User = require("./generatrors/UserGenerator");
const configuration = require("./generatrors/Config");

const numberOfUsers = configuration.maxUsers;
const generatedUsers = [];

for (let i = 0; i < numberOfUsers; i++) {
  generatedUsers.push(new User());
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", generatedUsers, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

    return queryInterface.bulkDelete("Users", null, {});
  },
};
