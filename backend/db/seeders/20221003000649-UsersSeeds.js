"use strict";

const User = require("./generatrors/UserGenerator");
const configuration = require("./generatrors/counter");


module.exports = {
	up: (queryInterface, Sequelize) => {
		const numberOfUsers = configuration.maxUsers;
		const generatedUsers = [];
		for (let i = 0; i < configuration.maxUsers; i++) {
			generatedUsers.push(new User());
		}
		return queryInterface.bulkInsert("Users", generatedUsers, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};
