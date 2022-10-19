'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('ThingsToDoTOThingsToDoListJoins', [
    {
      thingToDoListId: 1,
      thingToDoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 1,
      thingToDoId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 2,
      thingToDoId: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 2,
      thingToDoId: 48,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 2,
      thingToDoId: 42,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 2,
      thingToDoId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 2,
      thingToDoId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 2,
      thingToDoId: 41,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 3,
      thingToDoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 4,
      thingToDoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 4,
      thingToDoId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 4,
      thingToDoId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 4,
      thingToDoId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 4,
      thingToDoId: 52,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 4,
      thingToDoId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 4,
      thingToDoId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 5,
      thingToDoId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 5,
      thingToDoId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 5,
      thingToDoId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 5,
      thingToDoId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 5,
      thingToDoId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 5,
      thingToDoId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 5,
      thingToDoId: 32,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 6,
      thingToDoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thingToDoListId: 6,
      thingToDoId: 2,
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
   return queryInterface.bulkDelete('ThingsToDoTOThingsToDoListJoins', null, {});
  }
};
