const {faker} = require("@faker-js/faker")
const configuration = require("./counter")

class ThingRatings {
    constructor(
        userId = undefined,
        thingId = undefined,
        rating = undefined,
    ) {
        this.userId = userId ?? faker.number.int({
            min: 1,
            max: configuration.maxUsers
        })
        this.thingId = thingId ?? faker.number.int({
            min: 1,
            max: configuration.maxThingsToDo
        })
        this.rating = rating ?? faker.number.int({
            min: 1,
            max: 5
        })
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

module.exports = ThingRatings
