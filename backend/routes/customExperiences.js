const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../db/models");

router.get(
	"/",
	expressAsyncHandler(async (req, res, next) => {
		try {
			res.json(await db.Experience.findAll());
		} catch (e) {
			next(e);
		}
	})
);

router.get(
	"/:experienceId",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId)
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
				parseInt(req.params.experienceId)
			);
			if (experience) {
			}
		} catch (e) {}
	})
);

router.get(
	"/:experienceId/photos/:photoId",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [
						{
							model: db.ExperiencePhoto,
							through: { attributes: [] },
						},
					],
				}
			);

			const photo = experience.ExperiencePhoto.find(
				(photo) => photo.id === parseInt(req.params.photoId)
			);

			if (photo) {
				res.json(photo);
			} else if (experience.ExperiencePhoto.length) {
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
	expressAsyncHandler(async (req, res, next) => {
		try {
			const { url } = req.body;
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [
						{
							model: db.ExperiencePhoto,
							through: { attributes: [] },
						},
					],
				}
			);

			const photo = experience.ExperiencePhoto.find(
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
	expressAsyncHandler(async (req, res, next) => {
		try {
			const experience = await db.Experience.findByPk(
				parseInt(req.params.experienceId),
				{
					include: [
						{
							model: db.ExperiencePhoto,
							through: { attributes: [] },
						},
					],
				}
			);
			const photo = experience.ExperiencePhoto.find(
				(photo) => photo.id === parseInt(req.params.photoId)
			);
			if (photo) {
				await db.ExperiencePhoto.destroy();
			} else {
				throw new Error("Resource not found");
			}
		} catch (e) {
			next(e);
		}
	})
);
module.exports = router;
