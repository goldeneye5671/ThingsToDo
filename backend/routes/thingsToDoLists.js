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
            db.User,
            db.ThingsToDoListTag,
            db.ThingsToDo
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
            // include: [
            //     db.ThingsToDoListTag,
            //     db.User
            // ]
            include: [
                {
                    model: db.ThingsToDoListTag,
                    // All this does is tell me what attribute I want to include that go through the joins table. If I don't want anything I just leave it blank
                    through:{attributes: []} //"thingsToDoListId","createdAt", "updatedAt"]}   
                }
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

//handles only changing the name and description of the list
router.patch("/:id", expressAsyncHandler(async (req, res) => {
    const thingToDoList = await db.ThingsToDoList.findByPk(req.params.id);
    if (thingsToDoList) {
        
        const listName = req.body.listName ?? thingToDoList.listName
        const listDescription = req.body.listDescription ?? thingToDoList.listDescription

        thingsToDoList.update({
            listName,
            listDescription
        })
    } else {
        res.status(500).json({message: "the resource could not be found"})
    }

    const updatedThingsToDoList = await db.ThingsToDoList.findByPk(req.params.id)
    res.json(updatedThingsTODoList)
}))

/**
 * These two routes should handle deleting only one tag at a time. In the UI, the user will see a tag with an X next to it, and then
 * will click the X to remove it, therefore it doesn't make sense to have a bulk delete. Upon deleting a list, the api should be able
 * to delete the connection between the list and the tag with a single SQL query that looks something like:
 * 
 * db.ThingsToDoListTagJoins.delete({
 *  where: {
 *   ThingstToDoListId: req.params.id
 *  }
 * })
 * 
 * This would delete all of the connections between the list and the tags in one querry
 */


//handles only adding new tags to the list
//TODO: Only allow the user that owns the list to add a tag to it
router.post("/:listId/tag/add/:tagId", expressAsyncHandler(async (req, res, next) => {

    try {
    //grabs the tag from the joins if it exits
    const thingsToDoListTagJoinsAss = await db.ThingsToDoListTagJoins.findOne({
        where: {
            thingsToDoListId: req.params.listId,
            thingsToDoListTagId: req.params.tagId
        }
    })

    //grabs the tag from the db if it exists
    const thingsToDoListTag = await db.ThingsToDoListTag.findByPk(req.params.tagId);

    if (!thingsToDoListTagJoinsAss && thingsToDoListTag) {
        await db.ThingsToDoListTagJoins.create({
            thingsToDoListId: req.params.listId,
            thingsToDoListTagId: req.params.tagId
        })
    }

    res.json(await db.ThingsToDoList.findByPk(req.params.listId, {
        include: [
            {
                model: db.ThingsToDoListTag,
                through: {attributes: []}
            }
        ]
    }))
    } catch (e) {
        next(e);
    }
}
));
//handles only removing existing tags to the list
router.delete("/:listId/tag/remove/:tagId", expressAsyncHandler( async (req, res, next) => {
    // get the connection that represents the tag being associated with the list
    try {
        const thingsToDoListTagAss = await db.ThingsToDoListTagJoins.findOne({
            where: {
                thingsToDoListId: parseInt(req.params.listId),
                thingsToDoListTagId: parseInt(req.params.tagId)
            }
        })
    
        if (thingsToDoListTagAss) {
            await thingsToDoListTagAss.destroy()
            await res.json({message: "resource deleted"})
        } else {
            res.status(500).json({message: "resource could not be found"})
        }
    
    } catch (e) {
        next(e)
    }
}))
//handles only adding new thingsToDo to the list

//handles only removing existing thingsToDo from the list
router.delete("/:listId/thingToDo/remove/:thingToDoId", expressAsyncHandler(async (req, res, next) => {
    try{
        const thingToDoListTOthingAss = await db.ThingsToDoTOThingsToDoListJoins.findOne({
            where: {
                thingToDoListId: parseInt(req.params.listId),
                thingToDoId: parseInt(req.params.thingToDoId)
            }
        });
        
        console.log(thingToDoListTOthingAss)

        const thingToDoList = await db.ThingsToDoList.findByPk(parseInt(req.params.listId))

        if (thingToDoList && thingToDoListTOthingAss) {
            await thingToDoListTOthingAss.destroy();
            const updatedThingToDoList = await db.ThingsToDoList.findByPk(parseInt(req.params.listId), {
                include: [
                    db.ThingsToDoListTag,
                    db.ThingsToDo
                ]
            });
            res.json(updatedThingToDoList)
        } else {
            res.status(500).json({message: "could not find resource with the given ids"})
        }
    } catch(e) {
        next(e)
    }
}))


/**
 * This function only deletes the list and anything associated with the list
 */
router.delete("/:id", expressAsyncHandler(async (req, res) => {

    const listToDelete = await db.ThingsToDoList.findByPk(req.params.id)

    if (listToDelete) {
        try{
            await db.ThingsToDoTOThingsToDoListJoins.destroy({
                where: {
                    thingToDoListId: req.params.id
                }
            })

            await db.ThingsToDoListTagJoins.destroy({
                where: {
                    thingsToDoListId: req.params.id
                }
            })
        
            await listToDelete.destroy()

            res.json({
                message: "Resource deleted"
            })
        }catch(e) {
            console.log(e)
            res.json({message: "There was an issue deleting the resource"})
        }
    } else{
        res.status(500).json({
            message: "Cannot find the resource specified. Please verify that the id is correct"
        })
    }
}))


// Need 4 routes, 2 for adding and deleting tags, 2 for adding and deleting the actual thingtodo

//Adding many tag to a list 
router.post("/:id/tags", expressAsyncHandler(async (req, res) => {
    // Expecting a list of tags, even if it is one
    const {listTagIds} = req.body
    if (listTagIds && listTagIds > 0) {

        for (let listTagId of listTagIds) {
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
    } else if (req.body.listOfTags.length <= 0){
        throw new Error("Parameter has no tags to add")
    } else {
        throw new Error("Parameter not found")
    }
    
}))


// removing many tag from a list
router.delete("/:id/tags", expressAsyncHandler(async (req, res) => {
    // Expecting a list of tags, even if it is one
    const {listTagIds} = req.body
    if (listTagIds && listTagIds.length > 0) {
        for (let listTagId of listTagIds) {
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
    } else if (listTagIds.length <= 0) {
        throw new Error("Parameter has no tags to add")
    } else {
        throw new Error("Parameter not found")
    }
}))


// Adding many things to a list
router.post("/:id/ThingToDo", expressAsyncHandler(async (req, res) => {
    // Expecting a list of ThingsToDo, even if it is one
}))


// removing many things from a list
router.delete("/:id/ThingToDo", expressAsyncHandler(async (req, res) => {
    // Expecting a list of ThingsToDo, even if it is one
}))
module.exports = router
