'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
      return queryInterface.bulkInsert('ThingsToDoBusinessJoins', [
        {
         thingsToDoId: 1,
         businessId: 24,
         createdAt: new Date(),
         updatedAt: new Date() 
        },
        {
          thingsToDoId: 1,
          businessId: 19,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 2,
          businessId: 17,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 3,
          businessId: 4,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 3,
          businessId: 26,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 3,
          businessId: 27,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 4,
          businessId: 8,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 4,
          businessId: 7,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 5,
          businessId: 5,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 6,
          businessId: 6,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          thingsToDoId: 6,
          businessId: 21,
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
    return queryInterface.bulkDelete('ThingsToDoBusinessJoins', null, {});
  }
};
