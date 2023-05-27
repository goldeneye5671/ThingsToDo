const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler")
const db = require("../db/models")
const {Op} = require("sequelize")

router.get("/", expressAsyncHandler(async (req, res, next) => {
    try {
        const allBusinesses = await db.Business.findAll({
            include: [
                {
                    model: db.BusinessPhoto,
                },
                {
                    model: db.ThingsToDo,
                    through: {attributes: []}
                }
            ]
        })
        res.json(allBusinesses)
    } catch (e) {
        next(e)
    }
}))

router.get("/:businessId", expressAsyncHandler(async (req, res, next) => {
    try {
        const businessByPk = await db.Business.findByPk(parseInt(req.params.businessId),
        {
            include: [
                {
                    model: db.BusinessPhoto,
                },
                {
                    model: db.ThingsToDo,
                    through: {attributes: []}
                }
            ]
        });

        if (businessByPk) {
            res.json(businessByPk)
        } else {
            res.status(500).json({message: "Resource could not be found"})
        }
    } catch (e) {
        next(e)
    }
}))


router.post("/", expressAsyncHandler(async (req, res, next) => {
    try {
        const {
            name,
            primaryPhoto,
            address,
            city,
            stateProvince,
            country,
            zipcode
        } = req.body;

        if (name && city && stateProvince && country && zipcode) {
            const newBusiness = await db.Business.create({
                name, primaryPhoto ,address, city, stateProvince, country, zipcode
            })

            res.json(newBusiness)
        } else {
            throw new Error("Not all required info was provided for a business to be created")
        }
    } catch (e) {
        next(e)
    }
}))


router.patch("/:businessId", expressAsyncHandler(async (req, res, next) => {
    try {
        const businessToUpdate = await db.Business.findByPk(parseInt(req.params.businessId));
        if (businessToUpdate) {
            const name = req.body.name ?? businessToUpdate.name;
            const primaryPhoto = req.body.primaryPhoto ?? businessToUpdate.primaryPhoto;
            const address = req.body.address ?? businessToUpdate.address;
            const city = req.body.city ?? businessToUpdate.city;
            const stateProvince= req.body.stateProvince ?? businessToUpdate.stateProvince;
            const country = req.body.country ?? businessToUpdate.country;
            const zipcode = req.body.zipcode ?? businessToUpdate.zipcode;

            await businessToUpdate.update({
                name,
                primaryPhoto,
                address,
                city,
                stateProvince,
                country,
                zipcode
            })

            res.json(await db.Business.findByPk(req.params.businessId,
                {
                    include: [
                        {
                            model: db.BusinessPhoto,
                        },
                        {
                            model: db.ThingsToDo,
                            through: {attributes: []}
                        }
                    ]
                }))
        } else {
            res.status(500).json({message: "The resource couldn't be found"})
        }
    } catch (e) {
        next(e)
    }
}))


router.delete("/:businessId", expressAsyncHandler(async (req, res, next) => {
    /**
     * What needs to get deleted :
     * 1) ThingsToDoToBusinessJoins
     * 2) Business Photos
     * 3) Business itself
     */
    try{
        //Also only want do delete if the business exists
        if (await db.Business.findByPk(parseInt(req.params.businessId))) {
            await db.ThingsToDoBusinessJoin.destroy({
                where: {
                    businessId: parseInt(req.params.businessId)
                }
            });
        
            await db.BusinessPhoto.destroy({
                where: {
                    businessId: parseInt(req.params.businessId)
                }
            })
        
            await db.Business.destroy({
                where: {
                    id: parseInt(req.params.businessId)
                }
            })
        
            res.json({
                message: "Everything associated with this business have been deleted"
            })
        } else {
            throw new Error("Resource could not be found")
        }
    } catch (e) {
        next(e)
    }
}))


//These routes are for the joins table for the things to do. There will only be a create and delete

router.post("/:businessId/add-thingtodo/:thingId", expressAsyncHandler(async (req, res, next) => {
    try {

        const existingBusiness = await db.Business.findByPk(parseInt(req.params.businessId));
        const existingThingToDo = await db.ThingsToDo.findByPk(parseInt(req.params.thingId));
        const existingConnection = await db.ThingsToDoBusinessJoin.findOne({
            where: {
                businessId: parseInt(req.params.businessId),
                thingsToDoId: parseInt(req.params.thingId)
            }
        });

        if (existingConnection) {
            throw new Error("Business already has this thing to do")
        }

        if (existingBusiness && existingThingToDo) {
            const newConnection = await db.ThingsToDoBusinessJoin.create({
                thingsToDoId: parseInt(req.params.thingId),
                businessId: parseInt(req.params.businessId)
            })

            const updatedBusiness = await db.Business.findByPk(parseInt(req.params.businessId), {
                include: [
                    {
                        model: db.ThingsToDo,
                        through: {attributes: []}
                    },
                    {
                        model: db.BusinessPhoto,
                    }
                ]
            })

            res.json(updatedBusiness);
        } else {
            throw new Error("Could not find a business or Thing to do with the given ids");
        }
    } catch (e) {
        next(e)
    }
}))

router.delete("/:businessId/remove-thingtodo/:thingId", expressAsyncHandler(async(req, res, next) => {

}));

module.exports = router
