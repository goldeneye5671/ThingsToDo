"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("ThingsToDoBusinessJoins", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        thingsToDoId: {
          type: Sequelize.INTEGER,
          references: { model: "ThingsToDos" },
        },
        businessId: {
          type: Sequelize.INTEGER,
          references: { model: "Businesses" },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        return queryInterface.addConstraint("ThingsToDoBusinessJoins", {
          fields: ["businessId", "thingsToDoId"],
          type: "unique",
          name: "unique_business_thingsToDo",
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ThingsToDoBusinessJoins");
  },
};
