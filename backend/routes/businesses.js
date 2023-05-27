const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler")
const db = require("../db/models")
const {Op} = require("sequelize")

router.get("/", expressAsyncHandler(async (req, res, next) => {
    try {
        const allBusinesses = await db.Business.findAll()
        res.json(allBusinesses)
    } catch (e) {
        next(e)
    }
}))

router.get("/:businessId", expressAsyncHandler(async (req, res, next) => {
    try {
        const businessByPk = await db.Business.findByPk(parseInt(req.params.businessId));
        if (businessByPk) {
            res.json(businessByPk)
        } else {
            res.status(500).json({message: "Resource could not be found"})
        }
    } catch (e) {

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

            res.json(await db.Business.findByPk(req.params.businessId))
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
        /**
         * Steps:
         * 1. Check for an existing connection
         * 2. If the connection doesn't exists
         *   2a. Add connection
         *   2b. Return the original business with the new connection
         * 3. If the connection does exist
         *   3a. Tell user through an error that there is already a connection to this thing to do for this business
         */

        await db.ThingsToDoBusinessJoin.findByPk(parseInt(req.params.businessId, {
            where
        }))
    } catch (e) {
        next(e)
    }
}))

router.delete()
module.exports = router
