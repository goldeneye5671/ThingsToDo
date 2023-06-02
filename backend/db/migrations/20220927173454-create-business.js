"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Businesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(128),
      },
      primaryPhoto: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.STRING(256),
      },
      city: {
        type: Sequelize.STRING(128),
      },
      stateProvince: {
        type: Sequelize.STRING(100),
      },
      country: {
        type: Sequelize.STRING(64),
      },
      zipcode: {
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
    return queryInterface.dropTable("Businesses");
  },
};
