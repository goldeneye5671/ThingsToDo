"use strict";
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     username: DataTypes.STRING(64),
//     email: DataTypes.STRING(128),
//     firstName: DataTypes.STRING(128),
//     lastName: DataTypes.STRING(128),
//     profileImage: DataTypes.STRING,
//     bio: DataTypes.STRING(512),
//     password: DataTypes.STRING
//   }, {});
//   User.associate = function(models) {
//     // associations can be defined here
//     User.hasMany(models.ThingsToDoList, {
//       foreignKey: "userId",
//       onDelete: "CASCADE",
//       hooks: true
//     })

//     User.hasMany(models.Experience, {
//       foreignKey: "userId",
//       onDelete: "CASCADE",
//       hooks: true
//     })

//     User.hasMany(models.CustomDescription, {
//       foreignKey: "userId",
//       onDelete: "CASCADE",
//       hooks: true
//     })
//   };
//   return User;
// };

"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail(value) {
            if (!Validator.isEmail(value)) {
              throw new error("Must be a valid email");
            }
          },
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      firstName: DataTypes.STRING(128),
      lastName: DataTypes.STRING(128),
      profileImage: DataTypes.STRING,
      bio: DataTypes.STRING(512),
      membership: DataTypes.INTEGER,
      role: DataTypes.INTEGER,
      login: DataTypes.BOOLEAN,
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "role", "membership", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );

  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      user.update({
        login: true
      })
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  User.signup = async function ({
    username,
    email,
    firstName,
    lastName,
    profileImage,
    bio,
    hashedPassword,
  }) {
    const myHashedPassword = bcrypt.hashSync(hashedPassword);
    const user = await User.findOrCreate({
      where: {
        [Op.or]: {
          username,
          email,
        }
      },
    defaults: {
      username,
      email,
      firstName,
      lastName,
      profileImage,
      bio,
      hashedPassword: String(myHashedPassword),
    }
    });
    console.log("User after creation: ", user)
    const updatedUser = await User.scope("currentUser").findByPk(user.id);
    console.log("User after retrieval: ", updatedUser)
    return updatedUser;
  };

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.ThingsToDoList, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });

    User.hasMany(models.Experience, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });

    User.hasMany(models.CustomDescription, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });

    User.hasMany(models.ThingRating, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });

    User.belongsTo(models.Role, {
      foreignKey: "role"
    })

    User.belongsTo(models.Membership, {
      foreignKey: "membership"
    })
  };

  return User;
};
