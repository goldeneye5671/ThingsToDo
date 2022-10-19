'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ThingsToDoBusinessJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thingsToDoId: {
        type: Sequelize.INTEGER,
        references: {model: "ThingsToDos"}
      },
      businessId: {
        type: Sequelize.INTEGER,
        references: {model: "Businesses"}
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
    return queryInterface.dropTable('ThingsToDoBusinessJoins');
  }
};
