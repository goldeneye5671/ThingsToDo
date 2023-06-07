const { faker } = require("@faker-js/faker");

class ThingsToDoListTags {
  constructor(name = undefined) {
    this.name = name ?? faker.color.human();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = ThingsToDoListTags;
