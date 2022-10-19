'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
      return queryInterface.bulkInsert('ThingRatings', [
        {
          userId: 1,
          thingId: 1,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingId: 2,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingId: 3,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingId: 4,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingId: 5,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingId: 1,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingId: 2,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingId: 3,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingId: 4,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingId: 5,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
      return queryInterface.bulkDelete('ThingRatings', null, {});
  }
};
