'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ThingsToDoTOThingsToDoListJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thingToDoListId: {
        type: Sequelize.INTEGER,
        references: {model: "ThingsToDoLists"}
      },
      thingToDoId: {
        type: Sequelize.INTEGER,
        references: {model: "ThingsToDos"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ThingsToDoTOThingsToDoListJoins');
  }
};
