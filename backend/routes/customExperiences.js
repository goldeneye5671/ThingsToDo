const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler")
const db = require("../db/models");

router.get("/", expressAsyncHandler(async (req, res, next) => {
    try {
        res.json(await db.CustomExperience.findAll())
    } catch (e) {
        next(e)
    }
}))

router.get("/:experienceId", expressAsyncHandler(async (req, res, next) => {
    try {
        const experience = await db.CustomExperience.findOne(parseInt(req.params.experienceId))
        if (experience) {
            res.json(experience)
        } else {
            throw new Error("Resource not found")
        }
    } catch (e) {
        next(e)
    }
}))

router.post("/", expressAsyncHandler(async (req, res, next) => {
    try {
        const {
            userId,
            thingToDoId,
            title,
            description
        } = req.body;

        if (userId && thingToDoId && title && description) {
            const newExperience = await db.CustomExperience.create({
                userId,
                thingToDoId,
                title,
                description
            })

            res.json(newExperience)
        }
        
    } catch (e) {
        next(e)
    }
}))

router.patch("/:experienceId", expressAsyncHandler(async (req, res, next) => {
    try {
        const experience = await db.CustomExperience.findByPk(parseInt(req.params.experienceId));
        if (experience) {
            const title = req.body.title ?? experience.title;
            const description = req.body.description ?? experience.description

            experience.update({
                title,
                description
            })
            
            req.json(await db.CustomExperience.findByPk(parseInt(req.params.experienceId)));
        } else {
            throw new Error("Resource not found")
        }
    } catch (e) {
        next(e)
    }
}))

router.delete("/:experienceId", expressAsyncHandler(async (req, res, next) => {
    try {
        const experience = await db.CustomExperience.findByPk(parseInt(req.params.experienceId));
        if (experience) {
            await experience.destroy()
            res.json({
                message: "Resource deleted"
            })
        } else {
            throw new Error("Resource not found")
        }
    } catch (e) {
        next(e)
    }
}))

module.exports = router
