'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ThingsToDoListTagJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thingsToDoListId: {
        type: Sequelize.INTEGER,
        references: {model: "ThingsToDoLists"}
      },
      thingsToDoListTagId: {
        type: Sequelize.INTEGER,
        references: {model: "ThingsToDoListTags"}
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
    return queryInterface.dropTable('ThingsToDoListTagJoins');
  }
};
