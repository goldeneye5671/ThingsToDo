const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const {
	requireAdmin,
	requireBusiness,
	requireBasic,
	validateAccessToken,
	// requireAuth,
} = require("../../utils/auth");
router.get(
	"/",
	expressAsyncHandler(async (req, res, next) => {
		const { thingToDoId, limit, offset } = req.body;
		try {
			if (thingToDoId) {
				res.json(
					await db.CustomDescription.findAll({
						where: {
							thingToDoId,
						},
						limit,
						offset,
					})
				);
			} else {
				res.json(
					await db.CustomDescription.findAll({
						limit,
						offset,
					})
				);
			}
		} catch (e) {
			next(e);
		}
	})
);

router.post(
	"/",
	validateAccessToken,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const {thingToDoId, headline, description } = req.body;
			const userId = req.user.id;
			const upvotes = 0;
			const downvotes = 0;

			if (userId && thingToDoId && headline && description) {
				const newDesc = await db.CustomDescription.create({
					userId,
					thingToDoId,
					headline,
					description,
					upvotes,
					downvotes,
				});

				res.json(newDesc);
			} else {
				throw new Error(
					"Not all required info was provided for a description to be created"
				);
			}
		} catch (e) {
			next(e);
		}
	})
);

router.get(
	"/:customDescriptionId",
	expressAsyncHandler(async (req, res, next) => {
		try {
			const desc = await db.CustomDescription.findByPk(
				parseInt(req.params.customDescriptionId)
			);
			if (desc) {
				res.json(desc);
			} else {
				throw new Error("Could not find resource");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.patch(
	"/:customDescriptionId",
	validateAccessToken,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const desc = await db.CustomDescription.findByPk(
				parseInt(req.params.customDescriptionId)
			);
			if (desc) {
				const headline = req.body.headline ?? desc.headline;
				const description = req.body.description ?? desc.description;

				await desc.update({
					headline,
					description,
				});

				res.json(
					await db.CustomDescription.findByPk(
						parseInt(req.params.customDescriptionId)
					)
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
	"/:customDescriptionId",
	validateAccessToken,
	expressAsyncHandler(async (req, res, next) => {
		try {
			const desc = await db.CustomDescription.findByPk(
				parseInt(req.params.customDescriptionId)
			);

			if (desc) {
				await desc.destroy();
				res.json({
					message: "Resource Deleted",
					id: parseInt(req.params.customDescriptionId),
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
