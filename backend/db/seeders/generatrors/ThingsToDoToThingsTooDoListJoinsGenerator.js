const {faker} = require("@faker-js/faker")
const {configuration} = require("./Config")

class ThingsToDoTOThingsToDoListJoins {
    constructor(
        thingsToDoId = undefined,
        thingToDoListId = undefined
    ) {
        this.thingToDoId = thingsToDoId ?? faker.number.int({
            min: 1,
            max: configuration.maxThingsToDo
        })
        this.thingToDoListId = thingToDoListId ?? faker.number.int({
            min: 1,
            max: configuration.maxThingsToDoLists
        })
        this.createdAt = new Date()
        this.updatedAt = new Date();
    }
}

module.exports = ThingsToDoTOThingsToDoListJoins
