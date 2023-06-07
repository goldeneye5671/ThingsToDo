const { faker } = require("@faker-js/faker");
const configuration = require("./counter");

class ThingsToDoBusinessJoins {
	constructor(thingsToDoId, businessId) {
		this.thingsToDoId =
			thingsToDoId ??
			faker.number.int({
				min: 1,
				max: configuration.maxThingsToDo,
			});
		this.businessId =
			businessId ??
			faker.number.int({
				min: 1,
				max: configuration.maxBusinesses,
			});
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

module.exports = ThingsToDoBusinessJoins
