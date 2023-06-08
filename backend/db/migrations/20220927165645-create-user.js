"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING(30),
      },
      email: {
        type: Sequelize.STRING(128),
      },
      firstName: {
        type: Sequelize.STRING(128),
      },
      lastName: {
        type: Sequelize.STRING(128),
      },
      role: {
        // need protections around this. Only an admin should be able to change this role. Should not be shown to user
        type: Sequelize.INTEGER
      },
      membership: {
        // Can be changed by the user if they pay money
        type: Sequelize.INTEGER
      },
      profileImage: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.STRING(512),
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
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
    return queryInterface.dropTable("Users");
  },
};
