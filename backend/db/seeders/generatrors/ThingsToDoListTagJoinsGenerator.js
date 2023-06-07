const { faker } = require("@faker-js/faker");
const configuration = require("./counter");

class ThingsToDoListTagJoins {
	constructor(thingsToDoListId = undefined, thingsToDoListTagId = undefined) {
		this.thingsToDoListId =
			thingsToDoListId ??
			faker.number.int({
				min: 1,
				max: configuration.maxThingsToDoLists,
			});
		this.thingsToDoListTagId =
			thingsToDoListTagId ??
			faker.number.int({
				min: 1,
				max: configuration.maxThingsToDoTags,
			});
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

module.exports = ThingsToDoListTagJoins;
