const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler")
const db = require("../db/models")

// CRUD - create, read, update, delete a tag is needed. Only the admin should be able to do this

router.post("/", expressAsyncHandler(async (req, res) => {
    const { name } = req.body
    
    if (name) {
        const thingTag = await db.ThingsToDoListTag.create({
            name
        })
        if (thingTag) {
            res.json(thingTag)
        } else {
            throw new Error("Something went wrong when making the ThingToDoTag. Check the name and try again")
        }
    } else {
        throw new Error("Error finding the Name parameter. Check the request and try again")
    }
    
}))

router.get("/", expressAsyncHandler(async (req, res) => {
    const thingTags = await db.ThingsToDoListTag.findAll();
    if (thingTags) {
        res.json(thingTags)
    } else {
        throw new Error("Error finding the ThingsToDoListTags. Please try again")
    }
}))

router.get("/:id", expressAsyncHandler(async (req, res) => {
    const thingTag = await db.ThingsToDoListTag.findByPk(req.params.id)
    if (thingTag) {
        res.json(thingTag)
    } else {
        throw new Error(`Error finding the thing tag with the id ${req.params.id}. Please try again`)
    }
}))

router.patch("/:id", expressAsyncHandler(async (req, res) => {
    const updatedInfo = req.body
    const updatedThingTag = await db.ThingsToDoListTag.findByPk(req.params.id);
    if (updatedThingTag && updatedInfo) {
        updatedThingTag.update(updatedInfo)
        res.json(updatedThingTag)
    } else {
        throw new Error(`Error finding the thing tag with the id ${req.params.id}. Please try again`)
    }
}))

router.delete("/:id", expressAsyncHandler(async (req, res) => {
    console.log("Hit route")
    const deletedThingTag = await db.ThingsToDoListTag.findByPk(req.body.params);
    console.log("Got the thing to delete")
    if (deletedThingTag) {
        await deletedThingTag.destroy()
        // res.json(deletedThingTag)
        console.log("destroyed")
        res.json({status: "deleted"})
    }
}))

module.exports = router
