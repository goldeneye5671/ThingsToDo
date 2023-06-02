"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CustomDescriptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      headline: {
        type: Sequelize.STRING(256),
      },
      thingToDoId: {
        type: Sequelize.INTEGER,
        references: { model: "ThingsToDos" },
      },
      description: {
        type: Sequelize.TEXT,
      },
      upvotes: {
        type: Sequelize.INTEGER,
      },
      downvotes: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CustomDescriptions");
  },
};
