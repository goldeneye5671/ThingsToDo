const { faker } = require("@faker-js/faker");
const bcript = require("bcryptjs");

class User {
	constructor(
		username = undefined,
		email = undefined,
		firstName = undefined,
		lastName = undefined,
		profileImage = undefined,
		bio = undefined,
		hashedPassword = undefined
	) {
		this.username = username ?? faker.internet.userName();
		this.email = email ?? faker.internet.email();
		this.firstName = firstName ?? faker.person.firstName();
		this.lastName = lastName ?? faker.person.lastName();
		(this.profileImage =
			profileImage ??
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg"),
			(this.bio =
				bio ??
				faker.lorem.paragraph({
					min: 3,
					max: 4,
				}));
		this.hashedPassword = hashedPassword ?? String(bcript.hashSync("Password"));
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

module.exports = User;
