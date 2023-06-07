const {faker} = require("@faker-js/faker")
const configuration = require('./counter')

class CustomExperiences {
    constructor(
        userId = undefined,
        thingToDoId = undefined,
        title = undefined,
        description = undefined,
        upvotes = undefined,
        downvotes = undefined
    ) {
        this.userId = userId ?? faker.number.int({
            min: 1,
            max: configuration.maxUsers
        })
        this.thingToDoId  = thingToDoId ?? faker.number.int({
            min: 1,
            max: configuration.maxThingsToDo
        })
        this.title = title ?? faker.word.words({
            min: 1,
            max: 15
        })
        this.description = description ?? faker.word.words({
            min: 10,
            max: 1000
        })
        this.upvotes = upvotes ?? faker.number.int({
            min: 1,
            max: 10000
        })
        this.downvotes = downvotes ?? faker.number.int({
            min: 1,
            max: 10000
        })
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}


module.exports = CustomExperiences
