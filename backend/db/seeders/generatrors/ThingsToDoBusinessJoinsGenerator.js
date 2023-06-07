const {faker} = require("@faker-js/faker")
const {configuration} = require("./Config")

class ThingsToDoBusinessJoins {
    constructor (
        thingsToDoId,
        businessId
    ) {
        this.thingsToDoId = thingsToDoId ?? faker.number.int({
            min: 1,
            max: configuration.maxThingsToDo
        })
        this.businessId = businessId ?? faker.number.int({
            min: 1,
            max: configuration.maxBusiness
        })
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}
