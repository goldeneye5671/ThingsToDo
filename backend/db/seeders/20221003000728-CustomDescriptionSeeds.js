'use strict';

const {faker} = require("@faker-js/faker")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkInsert('CustomDescriptions', [
        {
          userId: 1,
          thingToDoId: 1,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingToDoId: 2,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingToDoId: 3,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingToDoId: 4,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 1,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 1,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          thingToDoId: 1,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 2,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 11,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          thingToDoId: 6,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          thingToDoId: 6,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          thingToDoId: 6,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 6,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          thingToDoId: 5,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          thingToDoId: 5,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          thingToDoId: 5,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 5,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 4,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 3,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 2,
          headline: faker.lorem.words({
            min: 4,
            max: 10
          }),
          description: faker.lorem.paragraph({
            min: 3,
            max: 6
          }),
          upvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
          downvotes: faker.number.bigInt({
            min: 0,
            max: 5000
          }),
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
      return queryInterface.bulkDelete('CustomDescriptions', null, {});
  }
};
