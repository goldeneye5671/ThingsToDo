const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { setTokenCookie, requireAuth } = require("../../utils/auth");

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("hashedPassword")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await db.User.findAll();
    if (users) {
      res.json(users);
    } else {
      throw new Error("Users cannot be found. This is a major issue");
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await db.User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      throw new Error("User cannot be found. Please try again");
    }
  })
);

router.get(
  "/current/:id",
  asyncHandler(async (req, res) => {
    const user = await db.User.getCurrentUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      throw new Error("User cannot be found. Please try again");
    }
  })
);

router.get(
  "/:id/lists",
  asyncHandler(async (req, res) => {
    const userWithLists = await db.User.findByPk(req.params.id, {
      include: [
        // db.ThingToDoList,
        db.Experience,
        db.CustomDescription,
        {
          model: db.ThingsToDoList,
          include: [db.ThingsToDoListTag],
        },
      ],
    });
    if (userWithLists) {
      res.send(userWithLists);
    } else {
      throw new Error("User cannot be found. Please try another user");
    }
  })
);

// PUT - is to change the resource entirely with the data sent from the user
// PATCH - is to change the resource partially with the data sent from the user

router.patch(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const updateUser = req.body;
    const user = await db.User.findByPk(req.params.id);
    // NOTE - Need an update here so that only an admin or the peron that owns this user can update this
    if (updateUser) {
      if (user) {
        user.update(updateUser);
        res.json(user);
      } else {
        throw new Error(`Could not find the user`);
      }
    } else {
      throw new Error(
        `Could not update user because incorrect value was retrieved in the request body: ${updateUser}`
      );
    }
  })
);

router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const {
      username,
      email,
      firstName,
      lastName,
      profileImage,
      bio,
      hashedPassword,
    } = req.body;
    const user = await db.User.signup({
      username,
      email,
      firstName,
      lastName,
      profileImage,
      bio,
      hashedPassword,
    });

    if (user) {
      await setTokenCookie(res, user);
      res.json({ user });
    }
  })
);

module.exports = router;
