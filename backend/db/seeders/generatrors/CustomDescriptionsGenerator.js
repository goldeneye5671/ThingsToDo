const { faker } = require("@faker-js/faker");
const { configuration } = require("./Config");

class CustomDescriptions {
  constructor(
    userId = undefined,
    thingToDoId = undefined,
    headline = undefined,
    description = undefined,
    upvotes = undefined,
    downvotes = undefined
  ) {
    this.userId =
      userId ??
      faker.number.int({
        min: 1,
        max: configuration.maxUsers,
      });
    this.thingToDoId =
      thingToDoId ??
      faker.number.int({
        min: 1,
        max: configuration.maxThingsToDo,
      });
    this.headline = headline ?? faker.lorem.sentence(1);
    this.description = description ?? faker.lorem.paragraph(5);
    this.upvotes =
      upvotes ??
      faker.number.int({
        min: 1,
        max: 10000,
      });
    this.downvotes =
      downvotes ??
      faker.number.int({
        min: 1,
        max: 10000,
      });
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = CustomDescriptions;
