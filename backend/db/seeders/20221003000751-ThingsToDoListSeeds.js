"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */

    return queryInterface.bulkInsert(
      "ThingsToDoLists",
      [
        {
          listName: "Test List One",
          listDescription: "Lorem ipsum",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Two",
          listDescription: "Lorem ipsum",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Three",
          listDescription: "Lorem ipsum",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Four",
          listDescription: "Lorem ipsum",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Five",
          listDescription: "Lorem ipsum",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Six",
          listDescription: "Lorem ipsum",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Seven",
          listDescription: "Lorem ipsum",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Eight",
          listDescription: "Lorem ipsum",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Nine",
          listDescription: "Lorem ipsum",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Ten",
          listDescription: "Lorem ipsum",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Eleven",
          listDescription: "Lorem ipsum",
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Twelve",
          listDescription: "Lorem ipsum",
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Thirteen",
          listDescription: "Lorem ipsum",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Fourteen",
          listDescription: "Lorem ipsum",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Fifteen",
          listDescription: "Lorem ipsum",
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Test List Sixteen",
          listDescription: "Lorem ipsum",
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
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
