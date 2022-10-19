'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */

      return queryInterface.bulkInsert('ThingsToDoListTags', [
        {
          name: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Art",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Computing",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Outdoors",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Adventure",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sports",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Music",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rights",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
      return queryInterface.bulkDelete('ThingsToDoListTags', null, {});
  }
};
