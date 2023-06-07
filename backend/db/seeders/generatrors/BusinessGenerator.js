const { faker } = require("@faker-js/faker");

class Businesses {
	constructor(
		name = undefined,
		primaryPhoto = undefined,
		address = undefined,
		city = undefined,
		stateProvince = undefined,
		country = undefined,
		zipcode = undefined
	) {
		this.name = name ?? faker.company.name();
		this.primaryPhoto = primaryPhoto ?? faker.internet.url();
		this.address = address ?? faker.location.streetAddress();
		this.city = city ?? faker.location.city();
		this.stateProvince = stateProvince ?? faker.location.state();
		this.country = country ?? faker.location.country();
		this.zipcode = zipcode ?? faker.location.zipCode();
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

module.exports = Businesses
