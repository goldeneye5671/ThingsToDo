const { faker } = require("@faker-js/faker")

class ThingsToDo {
    constructor (thingName = undefined, thingDescription = undefined){
        this.thingName = thingName ?? faker.lorem.words({
            min: 4,
            max: 8
        })
        this.thingDescription = thingDescription ?? faker.lorem.paragraph({
            min:2,
            max: 6
        })
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

module.exports = ThingsToDo
