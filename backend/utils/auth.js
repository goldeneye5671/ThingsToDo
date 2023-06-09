const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const { User, Role, Membership } = require("../db/models");
const { secret, expiresIn } = jwtConfig;

const setTokenCookie = (res, user) => {
  // Create the token.
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie("token", token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return 
  
;
};

const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;
  console.log(token)

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.scope("currentUser").findByPk(id);
    } catch (e) {
      res.clearCookie("token");
      return next();
    }

    if (!req.user) res.clearCookie("token");

    return next();
  });
};

const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user) throw new Error("Unauthorized")
    const user = await User.findByPk(req.user.id, {
      include: [
        Role,
        Membership
      ]
    })

    if (user.role === "admin") {
      next() 
    } else {
      console.log("%chere", 'color:blue')
      throw new Error("Unauthorized")
    } 

  } catch (e) {
    next(e)
  }
}

const requireBusiness = async (req, res, next) => {
  try {
    if (!req.user) throw new Error("Unauthorized")
    const user = await User.findByPk(req.user.id, {
      include: [
        Role,
        Membership
      ]
    })

    if (user.role === "business") {
      next() 
    } else {
      throw new Error("Unauthorized")
    } 

  } catch (e) {
    next(e)
  }
}

const requireModeration = async (req, res, next) => {
  try {
    if (!req.user) throw new Error("Unauthorized")
    const user = await User.findByPk(req.user.id, {
      include: [
        Role,
        Membership
      ]
    })

    if (user.role === "moderation") {
      next() 
    } else {
      throw new Error("Unauthorized")
    } 

  } catch (e) {
    next(e)
  }
}

const requireBasic = async (req, res, next) => {
  try {
    if (!req.user) throw new Error("Unauthorized")
    const user = await User.findByPk(req.user.id, {
      include: [
        Role,
        Membership
      ]
    })

    if (user.role === "basic") {
      next() 
    } else {
      throw new Error("Unauthorized")
    } 

  } catch (e) {
    next(e)
  }
}

const requireAuth = [
  restoreUser,
  function (req, res, next) {
    console.log(req.user)
    if (req.user) return next();

    const err = new Error("Unauthorized");
    err.title = "Unauthorized";
    err.errors = ["Unauthorized"];
    err.status = 401;
    return next(err);
  },
];

module.exports = {
  setTokenCookie,
  restoreUser,
  requireAuth,
  requireAdmin
};
