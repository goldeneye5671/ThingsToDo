const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");

// const { // requireAuth } = require("../../utils/auth");

router.get(
	"/",
	expressAsyncHandler(async (req, res, next) => {
		const { thingToDoId, limit, offset } = req.body;
		if (req.body.thingToDoId) {
			try {
				res.json(
					await db.Experience.findAll({
						where: {
							thingToDoId: parseInt(thingToDoId),
						},
						limit,
						offset,
						order: [['upvotesToDownvotesRatio', "ASC"]],
					})
				);
			} catch (e) {
				next(e);
			}
		} else {
			try {
				res.json(
					await db.Experience.findAll({
						limit,
						offset,
					})
				);
			} catch (e) {
				next(e);
			}
		}
	})
);

router.get(
	"/:experienceId",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [db.ExperiencePhoto],
				}
			);
			if (experience) {
				res.json(experience);
			} else {
				throw new Error("Resource not found");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.post(
	"/",
	// requireAuth,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const { userId, thingToDoId, title, description } = req.body;

			const upvotes = 0;
			const downvotes = 0;

			if (userId && thingToDoId && title && description) {
				const newExperience = await db.Experience.create({
					userId,
					thingToDoId,
					title,
					description,
					upvotes,
					downvotes,
				});

				res.json(newExperience);
			} else {
				throw new Error("Could not create experience. Invalid params provided");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.patch(
	"/:experienceId",
	// requireAuth,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId)
			);
			if (experience) {
				const title = req.body.title ?? experience.title;
				const description = req.body.description ?? experience.description;

				experience.update({
					title,
					description,
				});

				req.json(
					await db.Experience.findByPk(parseInt(req.params.experienceId))
				);
			} else {
				throw new Error("Resource not found");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.delete(
	"/:experienceId",
	// requireAuth,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId)
			);
			if (experience) {
				await experience.destroy();
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

router.get(
	"/:experienceId/photos/",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [db.ExperiencePhoto],
				}
			);

			if (experience && experience.ExperiencePhotos.length) {
				res.json(experience.ExperiencePhotos);
			} else if (!experience.ExperiencePhotos.length) {
				throw new Error("The experience has no photos");
			} else {
				throw new Error("Resource not found");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.get(
	"/:experienceId/photos/:photoId",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [db.ExperiencePhoto],
				}
			);

			const photo = experience.ExperiencePhotos.find(
				(photo) => photo.photoId === parseInt(req.params.photoId)
			);

			if (photo) {
				res.json(photo);
			} else if (experience.ExperiencePhotos.length) {
				throw new Error("Photo could not be found");
			} else {
				throw new Error("No photos exist for this experience");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.post(
	"/:experienceId/photos/",
	// requireAuth,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const { url } = req.body;
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [
						{
							model: db.ExperiencePhoto,
						},
					],
				}
			);

			const photo = experience.ExperiencePhotos.find(
				(photo) => photo.url === url
			);

			if (!photo) {
				const photo = await db.ExperiencePhoto.create({
					experienceId: parseInt(req.params.experienceId),
					url,
				});
				res.json(photo);
			} else {
				throw new Error("A photo already exists with this url");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.delete(
	"/:experienceId/photos/:photoId",
	// requireAuth,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const transaction = await db.sequelize.transaction();
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [
						{
							model: db.ExperiencePhoto,
						},
					],
				}
			);
			const photo = experience.ExperiencePhotos.find(
				(photo) => photo.photoId === parseInt(req.params.photoId)
			);
			if (photo) {
				await db.ExperiencePhoto.destroy({
					where: {
						photoId: photo.photoId,
						experienceId: parseInt(req.params.experienceId),
					},
					individualHooks: true,
					transaction,
				});
				await transaction.commit();
				res.json({ message: "Resource deleted" });
			} else {
				await transaction.rollback();
				throw new Error("Resource not found");
			}
		} catch (e) {
			next(e);
		}
	})
);

module.exports = router;
