const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../db/models");
const { Op } = require("sequelize");
const { requireAdmin, requireBusiness, requireAuth } = require("../utils/auth");

router.get(
	"/",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const allBusinesses = await db.Business.findAll({
				include: [
					{
						model: db.BusinessPhoto,
					},
					{
						model: db.ThingsToDo,
						through: { attributes: [] },
					},
				],
			});
			res.json(allBusinesses);
		} catch (e) {
			next(e);
		}
	})
);

router.get(
	"/:businessId",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const businessByPk = await db.Business.findByPk(
				parseInt(req.params.businessId),
				{
					include: [
						{
							model: db.BusinessPhoto,
						},
						{
							model: db.ThingsToDo,
							through: { attributes: [] },
						},
					],
				}
			);

			if (businessByPk) {
				res.json(businessByPk);
			} else {
				res.status(500).json({ message: "Resource could not be found" });
			}
		} catch (e) {
			next(e);
		}
	})
);

router.post(
	"/",
	// requireAuth,
	// requireAdmin,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const {
				name,
				primaryPhoto,
				address,
				city,
				stateProvince,
				country,
				zipcode,
			} = req.body;

			console.log(req.body);

			if (name && city && stateProvince && country && zipcode) {
				const [newBusiness, created] = await db.Business.findOrCreate({
					where: {[Op.and]: {
            name,
            address
          }},
					defaults: {
						name,
						primaryPhoto,
						address,
						city,
						stateProvince,
						country,
						zipcode,
					},
				});
        if (!created) {
          throw new Error("Business already exists")
        }
				res.json(newBusiness);
			} else {
				throw new Error(
					"Not all required info was provided for a business to be created"
				);
			}
		} catch (e) {
			next(e);
		}
	})
);

router.patch(
	"/:businessId",
	// requireAuth,
	// requireBusiness,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const businessToUpdate = await db.Business.findByPk(
				parseInt(req.params.businessId)
			);
			if (businessToUpdate) {
				const name = req.body.name ?? businessToUpdate.name;
				const primaryPhoto =
					req.body.primaryPhoto ?? businessToUpdate.primaryPhoto;
				const address = req.body.address ?? businessToUpdate.address;
				const city = req.body.city ?? businessToUpdate.city;
				const stateProvince =
					req.body.stateProvince ?? businessToUpdate.stateProvince;
				const country = req.body.country ?? businessToUpdate.country;
				const zipcode = req.body.zipcode ?? businessToUpdate.zipcode;

				await businessToUpdate.update({
					name,
					primaryPhoto,
					address,
					city,
					stateProvince,
					country,
					zipcode,
				});

				res.json(
					await db.Business.findByPk(req.params.businessId, {
						include: [
							{
								model: db.BusinessPhoto,
							},
							{
								model: db.ThingsToDo,
								through: { attributes: [] },
							},
						],
					})
				);
			} else {
				res.status(500).json({ message: "The resource couldn't be found" });
			}
		} catch (e) {
			next(e);
		}
	})
);

router.delete(
	"/:businessId",
	// requireAuth,
	// requireBusiness,
	expressAsyncHandler(async (req, res, next) => {
		/**
		 * What needs to get deleted :
		 * 1) ThingsToDoToBusinessJoins
		 * 2) Business Photos
		 * 3) Business itself
		 */
		try {
			//Also only want do delete if the business exists
			if (await db.Business.findByPk(parseInt(req.params.businessId))) {
				await db.ThingsToDoBusinessJoin.destroy({
					where: {
						businessId: parseInt(req.params.businessId),
					},
				});

				await db.BusinessPhoto.destroy({
					where: {
						businessId: parseInt(req.params.businessId),
					},
				});

				await db.Business.destroy({
					where: {
						id: parseInt(req.params.businessId),
					},
				});

				res.json({
          id: req.params.businessId,
					message: "Everything associated with this business have been deleted",
				});
			} else {
				throw new Error("Resource could not be found");
			}
		} catch (e) {
			next(e);
		}
	})
);

//These routes are for the joins table for the things to do. There will only be a create and delete

router.post(
	"/:businessId/add-thingtodo/:thingId",
	requireAuth,
	requireBusiness,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const existingBusiness = await db.Business.findByPk(
				parseInt(req.params.businessId)
			);
			const existingThingToDo = await db.ThingsToDo.findByPk(
				parseInt(req.params.thingId)
			);
			const existingConnection = await db.ThingsToDoBusinessJoin.findOne({
				where: {
					businessId: parseInt(req.params.businessId),
					thingsToDoId: parseInt(req.params.thingId),
				},
			});

			if (existingConnection) {
				throw new Error("Business already has this thing to do");
			}

			if (existingBusiness && existingThingToDo) {
				const newConnection = await db.ThingsToDoBusinessJoin.create({
					thingsToDoId: parseInt(req.params.thingId),
					businessId: parseInt(req.params.businessId),
				});

				const updatedBusiness = await db.Business.findByPk(
					parseInt(req.params.businessId),
					{
						include: [
							{
								model: db.ThingsToDo,
								through: { attributes: [] },
							},
							{
								model: db.BusinessPhoto,
							},
						],
					}
				);

				res.json(updatedBusiness);
			} else {
				throw new Error(
					"Could not find a business or Thing to do with the given ids"
				);
			}
		} catch (e) {
			next(e);
		}
	})
);

router.delete(
	"/:businessId/remove-thingtodo/:thingId",
	requireAuth,
	requireBusiness,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const existingBusiness = await db.Business.findByPk(
				parseInt(req.params.businessId)
			);
			const existingThingToDo = await db.ThingsToDo.findByPk(
				parseInt(req.params.thingId)
			);
			const existingConnection = await db.ThingsToDoBusinessJoin.findOne({
				where: {
					businessId: parseInt(req.params.businessId),
					thingsToDoId: parseInt(req.params.thingId),
				},
			});

			if (!existingConnection) {
				throw new Error("Business does not have this thing to do");
			}

			if (existingBusiness && existingThingToDo) {
				await db.ThingsToDoBusinessJoin.destroy({
					where: {
						thingsToDoId: parseInt(req.params.thingId),
						businessId: parseInt(req.params.businessId),
					},
				});

				const updatedBusiness = await db.Business.findByPk(
					parseInt(req.params.businessId),
					{
						include: [
							{
								model: db.ThingsToDo,
								through: { attributes: [] },
							},
							{
								model: db.BusinessPhoto,
							},
						],
					}
				);

				res.json(updatedBusiness);
			} else {
				throw new Error(
					"Could not find a business or Thing to do with the given ids"
				);
			}
		} catch (e) {
			next(e);
		}
	})
);

router.get(
	"/:businessId/photos",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const business = await db.Business.findByPk(
				parseInt(req.params.businessId)
			);
			if (business) {
				const photos = await db.BusinessPhoto.findAll({
					where: {
						businessId: parseInt(req.params.businessId),
					},
				});

				if (photos.length > 0) {
					res.json(photos);
				} else {
					res.json({ Message: "Business does not have any photos" });
				}
			} else {
				throw new Error("Business does not exist");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.get(
	"/:businessId/photos/:photoId",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const business = await db.Business.findByPk(
				parseInt(req.params.businessId)
			);
			if (business) {
				const photo = await db.BusinessPhoto.findByPk(
					parseInt(req.params.photoId),
					{
						where: {
							businessId: parseInt(req.params.businessId),
						},
					}
				);

				if (photo) {
					res.json(photo);
				} else {
					throw new Error("Resource not found");
				}
			} else {
				throw new Error("Resource not found");
			}
		} catch {
			next(e);
		}
	})
);

router.post(
	"/:businessId/photos",
	requireAuth,
	requireBusiness,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const { name, alt, url } = req.body;

			const business = await db.Business.findByPk(
				parseInt(req.params.businessId)
			);
			if (business) {
				const photo = await db.BusinessPhoto.findOne({
					where: {
						businessId: parseInt(req.params.businessId),
						name,
						alt,
						url,
					},
				});
				if (!photo) {
					const newBusinessPhoto = await db.BusinessPhoto.create({
						businessId: parseInt(req.params.businessId),
						name,
						alt,
						url,
					});
					res.json(newBusinessPhoto);
				} else {
					throw new Error("Photo with the given information already exists");
				}
			} else {
				throw new Error("Resource not found");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.delete(
	"/:businessId/photos/:photoId",
	requireAuth,
	requireBusiness,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const businessPhoto = await db.BusinessPhoto.findByPk(
				parseInt(req.params.photoId),
				{
					where: {
						businessId: parseInt(req.params.businessId),
					},
				}
			);

			if (businessPhoto) {
				await businessPhoto.destroy();
				res.json({
					message: "Resource deleted",
				});
			} else {
				throw new Error("Resource not found");
			}
		} catch (e) {
			next(e);
		}
	})
);

module.exports = router;
