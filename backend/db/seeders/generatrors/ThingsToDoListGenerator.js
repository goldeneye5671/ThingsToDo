const { faker } = require("@faker-js/faker");

class ThingsToDoList {
  constructor(
    listName = undefined,
    listDescription = undefined,
    userId = undefined
  ) {
    this.listName = listName ?? faker.word.noun();
    this.listDescription =
      listDescription ??
      faker.lorem.paragraph({
        min: 1,
        max: 4,
      });
    this.userId =
      userId ??
      faker.number.int({
        min: 1,
        max: 50,
      });
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = ThingsToDoList;
