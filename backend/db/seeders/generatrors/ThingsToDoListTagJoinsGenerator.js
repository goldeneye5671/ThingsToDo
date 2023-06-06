const {faker} = require('@faker-js/faker')

class ThingsToDoListTagJoins {
    constructor(
        listId = undefined,
        thingToDoLIstTagId = undefined
    ) {
        this.listId = listId ?? faker.number.int()
        this.thingToDoId = thingToDoLIstTagId ?? faker.number.int();
    }
}