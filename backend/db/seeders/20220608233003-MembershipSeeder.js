'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Memberships", [
      {name: "basic", createdAt: new Date(), updatedAt: new Date()},
      {name: "advanced", createdAt: new Date(), updatedAt: new Date()},
      {name: "ultimate", createdAt: new Date(), updatedAt: new Date()},
      {name: "businessBasic", createdAt: new Date(), updatedAt: new Date()},
      {name: "businessUltimate", createdAt: new Date(), updatedAt: new Date()},
      
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
