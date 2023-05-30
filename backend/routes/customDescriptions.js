const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler")
const db = require("../db/models");


router.get("/", expressAsyncHandler(async (req, res, next) => {
    try {
        res.json(await db.CustomDescription.findAll());
    } catch (e) {
        next(e)
    }
}));

router.post("/",expressAsyncHandler(async (req, res, next) => {
    try {
        const {
            userId,
            thingToDoId,
            headline,
            description,
        } = req.body

        if (userId && thingToDoId && headline && description) {
            const newDesc = await db.CustomDescription.create({
                userId,
                thingToDoId,
                headline,
                description
            })
    
            res.json(newDesc)
        } else {
            throw new Error("Not all required info was provided for a description to be created")
        }
    } catch (e) {
        next(e)
    }
}))

router.get("/:customDescriptionId", expressAsyncHandler(async (req, res, next) => {
    try {
        const desc = await db.CustomDescription.findByPk(parseInt(req.params.customDescriptionId))
        if (desc) {
            res.json(desc)
        } else {
            throw new Error("Could not find resource")
        }
    }catch (e) {
        next(e)
    }
}))


router.patch("/:customDescriptionId", expressAsyncHandler(async (req, res, next) => {
    try {
        const desc = await db.CustomDescription.findByPk(parseInt(req.params.customDescriptionId))
        if (desc) { 
            const headline = req.body.headline ?? desc.headline;
            const description = req.body.description ?? desc.description

            await desc.update({
                headline,
                description
            });

            res.json(await db.CustomDescription.findByPk(parseInt(req.params.customDescriptionId)))
        } else {
            throw new Error("Resource not found")
        }
    } catch (e) {
        next(e)
    }
}));

router.delete("/:customDescriptionId", expressAsyncHandler(async (req, res, next) => {
    try {
        const desc = await db.CustomDescription.findByPk(parseInt(req.params.customDescriptionId));

        if (desc) {
            await desc.destroy()
            res.json({
                message: "Resource Deleted"
            })
        } else {
            throw new Error("Resource not found")
        }
    } catch (e) {
        next(e)
    }
}));


module.exports = router;
