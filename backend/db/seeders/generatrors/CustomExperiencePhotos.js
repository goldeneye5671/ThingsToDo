const { faker } = require("@faker-js/faker");
const configuration = require("./counter");

class CustomExperincePhotos {
	constructor(url = undefined, experienceId = undefined, photoId = undefined) {
		this.experienceId =
			experienceId ??
			faker.number.int({
				min: 1,
				max: configuration.maxExperiences,
			});
		// this.photoId =
		// 	photoId ??
		// 	faker.number.int({
		// 		min: 1,
		// 		max: configuration.maxExperiencePhotos,
		// 	});
		this.url = url ?? faker.internet.url();
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

module.exports = CustomExperincePhotos
