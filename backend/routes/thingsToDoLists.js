const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const Op = require("sequelize");
const db = require("../db/models");

// Get one list
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const allThingsToDoLists = await db.ThingsToDoList.findAll({
      include: [db.User],
    });
    if (allThingsToDoLists) {
      res.json(allThingsToDoLists);
    } else {
      throw new Error("Could not find things to do");
    }
  })
);

// Fet all lists
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const oneThingsToDoList = await db.ThingsToDoList.findByPk(req.params.id, {
      include: [db.User, db.ThingsToDoListTag, db.ThingsToDo],
    });
    res.json(oneThingsToDoList);
  })
);

// Create one list
router.post(
  "/",
  requireAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const { listName, listDescription, userId } = req.body;
      if (!userId && !listName && !listDescription) {
        throw new Error(
          `Error: Params didn't match expected: listName ${listName}, listDescription ${listDescription}, userId: ${userId}`
        );
      }

      const createdThingToDoList = await db.ThingsToDoList.create({
        userId,
        listName,
        listDescription,
      });
      const getThingToDoList = await db.ThingsToDoList.findByPk(
        createdThingToDoList.id,
        {
          include: [
            {
              model: db.ThingsToDoListTag,
              through: { attributes: [] },
            },
          ],
        }
      );
      if (getThingToDoList) {
        res.json(getThingToDoList);
      } else {
        throw new Error("New list was not created successfully");
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "An error occurred" });
    }
  })
);

// updated one list
router.patch(
  "/:id",
  requireAuth,
  expressAsyncHandler(async (req, res) => {
    const thingToDoList = await db.ThingsToDoList.findByPk(req.params.id);
    if (thingsToDoList) {
      const listName = req.body.listName ?? thingToDoList.listName;
      const listDescription =
        req.body.listDescription ?? thingToDoList.listDescription;

      thingsToDoList.update({
        listName,
        listDescription,
      });
    } else {
      res.status(500).json({ message: "the resource could not be found" });
    }

    const updatedThingsToDoList = await db.ThingsToDoList.findByPk(
      req.params.id
    );
    res.json(updatedThingsTODoList);
  })
);

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
router.post(
  "/:listId/tag/add/:tagId",
  requireAuth,
  expressAsyncHandler(async (req, res, next) => {
    try {
      //grabs the tag from the joins if it exits
      const thingsToDoListTagJoinsAss = await db.ThingsToDoListTagJoins.findOne(
        {
          where: {
            thingsToDoListId: req.params.listId,
            thingsToDoListTagId: req.params.tagId,
          },
        }
      );

      //grabs the tag from the db if it exists
      const thingsToDoListTag = await db.ThingsToDoListTag.findByPk(
        req.params.tagId
      );

      if (!thingsToDoListTagJoinsAss && thingsToDoListTag) {
        await db.ThingsToDoListTagJoins.create({
          thingsToDoListId: req.params.listId,
          thingsToDoListTagId: req.params.tagId,
        });
      }

      res.json(
        await db.ThingsToDoList.findByPk(req.params.listId, {
          include: [
            {
              model: db.ThingsToDoListTag,
              through: { attributes: [] },
            },
          ],
        })
      );
    } catch (e) {
      next(e);
    }
  })
);

//handles only removing existing tags to the list
router.delete(
  "/:listId/tag/remove/:tagId",
  requireAuth,
  expressAsyncHandler(async (req, res, next) => {
    // get the connection that represents the tag being associated with the list
    try {
      const thingsToDoListTagAss = await db.ThingsToDoListTagJoins.findOne({
        where: {
          thingsToDoListId: parseInt(req.params.listId),
          thingsToDoListTagId: parseInt(req.params.tagId),
        },
      });

      if (thingsToDoListTagAss) {
        await thingsToDoListTagAss.destroy();
        await res.json({ message: "resource deleted" });
      } else {
        res.status(500).json({ message: "resource could not be found" });
      }
    } catch (e) {
      next(e);
    }
  })
);

//handles only adding new thingsToDo to the list
router.post(
  "/:listId/thingToDo/add/:thingToDoId",
  requireAuth,
  expressAsyncHandler(async (req, res, next) => {
    try {
      // find the connection if it exists
      const thingToDoListTOthingAss =
        await db.ThingsToDoTOThingsToDoListJoins.findOne({
          where: {
            thingToDoListId: parseInt(req.params.listId),
            thingToDoId: parseInt(req.params.thingToDoId),
          },
        });

      const thingsToDoList = await db.ThingsToDoList.findByPk(
        parseInt(req.params.listId)
      );

      console.log(thingsToDoList && !thingToDoListTOthingAss);
      if (thingsToDoList && !thingToDoListTOthingAss) {
        await db.ThingsToDoTOThingsToDoListJoins.create({
          thingToDoListId: parseInt(req.params.listId),
          thingToDoId: parseInt(req.params.thingToDoId),
        });
      }
      const updatedThingToDoList = await db.ThingsToDoList.findByPk(
        parseInt(req.params.listId),
        {
          include: [db.ThingsToDoListTag, db.ThingsToDo],
        }
      );

      res.json(updatedThingToDoList);
    } catch (e) {
      next(e);
    }
  })
);

//handles only removing existing thingsToDo from the list
router.delete(
  "/:listId/thingToDo/remove/:thingToDoId",
  requireAuth,
  expressAsyncHandler(async (req, res, next) => {
    try {
      const thingToDoListTOthingAss =
        await db.ThingsToDoTOThingsToDoListJoins.findOne({
          where: {
            thingToDoListId: parseInt(req.params.listId),
            thingToDoId: parseInt(req.params.thingToDoId),
          },
        });

      const thingToDoList = await db.ThingsToDoList.findByPk(
        parseInt(req.params.listId)
      );

      if (thingToDoList && thingToDoListTOthingAss) {
        await thingToDoListTOthingAss.destroy();
        const updatedThingToDoList = await db.ThingsToDoList.findByPk(
          parseInt(req.params.listId),
          {
            include: [db.ThingsToDoListTag, db.ThingsToDo],
          }
        );
        res.json(updatedThingToDoList);
      } else {
        res
          .status(500)
          .json({ message: "could not find resource with the given ids" });
      }
    } catch (e) {
      next(e);
    }
  })
);

/**
 * This function only deletes the list and anything associated with the list
 */
router.delete(
  "/:id",
  requireAuth,
  expressAsyncHandler(async (req, res) => {
    const listToDelete = await db.ThingsToDoList.findByPk(req.params.id);

    if (listToDelete) {
      try {
        await db.ThingsToDoTOThingsToDoListJoins.destroy({
          where: {
            thingToDoListId: req.params.id,
          },
        });

        await db.ThingsToDoListTagJoins.destroy({
          where: {
            thingsToDoListId: req.params.id,
          },
        });

        await listToDelete.destroy();

        res.json({
          message: "Resource deleted",
        });
      } catch (e) {
        console.log(e);
        res.json({ message: "There was an issue deleting the resource" });
      }
    } else {
      res.status(500).json({
        message:
          "Cannot find the resource specified. Please verify that the id is correct",
      });
    }
  })
);

module.exports = router;
