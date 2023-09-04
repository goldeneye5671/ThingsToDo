const router = require('express').Router();

const sessionRoutes = require("./session")
const userRoutes = require("./users");
const thingsToDoListTagRouter = require("./thingsToDoListTags");
const thingsToDoListRouter = require("./thingsToDoLists");
const thingsToDoRouter = require("./thingsToDo");
const businessesRouter = require("./businesses");
const descriptionsRouter = require("./customDescriptions");
const experiencesRouter = require("./customExperiences");

router.use("/session", sessionRoutes)
router.use("/users", userRoutes);
router.use("/thingtodolisttag", thingsToDoListTagRouter);
router.use("/thingstodolists", thingsToDoListRouter);
router.use("/thingstodo", thingsToDoRouter);
router.use("/businesses", businessesRouter);
router.use("/descriptions", descriptionsRouter);
router.use("/experiences", experiencesRouter);

module.exports = router;