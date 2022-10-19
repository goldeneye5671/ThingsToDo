const router = require("express").Router()
const expressAsyncHandler = require("express-async-handler")
const Op = require("sequelize")
const db = require("../db/models");


router.get("/", expressAsyncHandler(async (req, res) => {
    const allThingsToDoLists = await db.ThingsToDoList.findAll({
        include: [
            db.User
        ]
    });
    if (allThingsToDoLists) {
        res.json(allThingsToDoLists)
    } else {
        throw new Error("Could not find things to do")
    }
}))

router.get("/:id", expressAsyncHandler(async (req, res) => {
    const oneThingsToDoList = await db.ThingsToDoList.findByPk(req.params.id, {
        include: [
            db.ThingsToDoListTag,
            db.User,
        ]
    })
    res.json(oneThingsToDoList)
}))

router.post("/", expressAsyncHandler(async (req, res) => {
    const {listName, listDescription, listTagIds, userId} = req.body
    if (listName && listDescription && userId) {
        // Creates the new list
        const createdThingToDoList = await db.ThingsToDoList.create({userId, listName, listDescription});
        
        // Adds any tags to be associated with the list
        for (let listTagId of listTagIds){
            // gets the tag from the db if it exists
            const checkTag = await db.ThingsToDoListTag.findByPk(listTagId)
            // Checks to see if the tag exists
            if (checkTag){
                const addedTagAssociation = await db.ThingsToDoListTagJoins.create({
                    thingsToDoListId: createdThingToDoList.id,
                    thingsToDoListTagId: listTagId
                })
            }
        }

        // gets the updated list with all tags added
        const getThingToDoList = await db.ThingsToDoList.findByPk(createdThingToDoList.id, {
            include: [
                db.ThingsToDoListTag,
                db.User
            ]
        })

        if (getThingToDoList) {
            console.log(getThingToDoList)
            res.json(getThingToDoList)
        } else {
            throw new Error("New list was not created successfully")
        }
    } else {
        throw new Error(`Error: Params didn't match expected: listName ${listName}, listDescription ${listDescription}, userId: ${userId}`)
    }
}))


/**
 * 
    {
    "listName": "Test Name",
    "listDescription": "Test Desc",
    "listTagIds": {
            "add": [],
            "remove": []
        }
    }
 */
router.patch("/:id", expressAsyncHandler(async (req, res) => {
    const {listName, listDescription, listTagIds} = req.body
    const createdThingToDoList = await db.ThingsToDoList.findByPk(req.params.id, {
        include: [
            db.ThingsToDoListTag
        ]
    })

    if (listName && listDescription) {
        createdThingToDoList.update({
            listName,
            listDescription
        })
    } else {
        throw new Error(`Error: Params didn't match expected: listName ${listName}, listDescription ${listDescription}`)
    }

    // Does the list exist
    if (createdThingToDoList) {
        // go through each list tag in the add property
        for (let listTagId of listTagIds.add) {
            console.log("IN LOOP \n")
            // get the tag from the db
            const checkTag = await db.ThingsToDoListTag.findByPk(listTagId)
                // Checks to see if the tag doesn't exist yet exists
                if (checkTag){
                    // check if the tag is on the list
                    if (!createdThingToDoList.ThingsToDoListTags.find((el, i) => el.id === checkTag.id)) {
                        await db.ThingsToDoListTagJoins.create({
                            thingsToDoListId: createdThingToDoList.id,
                            thingsToDoListTagId: listTagId
                        })
                    }
                    // add the tag to the list
                    
                } else {
                    throw new Error ("This tag does not exist")
                }
        }
        // go through each of the tags with the list, 
        for (let listTagId of listTagIds.remove) {
            // See if the listTagId is associated with the list and remove it if it is
            let listTag = createdThingToDoList.ThingsToDoListTags.find((el, i) => el.id === listTagId)
            if (listTag) {
                // get the connection and delete it
                const listTagConnection = await db.ThingsToDoListTagJoins.findOne({
                    where: {
                        thingsToDoListTagId: listTag.id
                    }
                })

                listTagConnection.destroy()
            }
        }
        const updatedThingsToDoList = await db.ThingsToDoList.findByPk(req.params.id, {
            include: [
                db.ThingsToDoListTag
            ]
        })
        
        res.json(updatedThingsToDoList)
    } else {
        throw new Error(`Error: Params didn't find a list with an id of ${req.params.id}`)
    }

}))

router.delete("/:id", expressAsyncHandler(async (req, res) => {
    const listToDelete = await db.ThingsToDoList.findByPk(req.params.id);
    if (listToDelete) {
        const listTagJoinsToDelete = await db.ThingsToDoListTagJoins.findAll({
            where: {
                thingsToDoListId: req.params.id
            }
        })

        console.log("List to be deleted: ", listTagJoinsToDelete)

        for (let listTagJoin in listTagJoinsToDelete) {
            await listTagJoin.destroy();
        }

        await listToDelete.destroy()
        res.json({"status": "deleted"})
    } else {
        throw new Error(`Cannot find thing to do list with the id of ${req.params.id}`)
    }
}))


module.exports = router
