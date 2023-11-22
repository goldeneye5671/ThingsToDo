const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const { User, Role, Membership } = require("../db/models");
const { accessSecret, refreshSecret, refreshExpiresIn, accessExpiresIn, isProduction } = jwtConfig;


const generateAccessToken = (user) => {

  const accessToken = jwt.sign(
    { data: user.toSafeObject() },
    accessSecret,
    { expiresIn: parseInt(accessExpiresIn) } // 604,800 seconds = 1 week
  );
  console.log(accessExpiresIn)
  return accessToken
}

const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(
    { data: user.toSafeObject() },
    refreshSecret,
    { expiresIn: parseInt(refreshExpiresIn) } 
  );

  return refreshToken
}

const setTokens = (res, user) => {
  // Create the token.
  
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user);
  

  //Save the token to the user

  // Set the token cookie
    // res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
    res.cookie("jwt", refreshToken, {
      maxAge: refreshExpiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax",}
    )
    return res.json({user, accessToken})
};


/**
 * TODO: Change this to allow a user to generate an access token if they only have a refresh token
 *        idea being that if they have the refresh token they should be able to create an access token?
 */

const validateRefreshToken = async (req, res, next) => {
  const refreshToken = req.cookies["jwt"];

  if (!refreshToken) return res.status(403).json({message: "Refresh Token Missing"})

  try{
    // check to make sure that the refresh token is valid
    const decodedRefreshToken = jwt.verify(refreshToken, refreshSecret);
    // check to see if the user is a valid user
    const userId = decodedRefreshToken.data.id;
    // console.log(userId)
    const user = await User.scope('currentUser').findOne({
      where: {
        id: userId
      }
    });
    // if they're not, send back an error
    if (!user) return res.status(401).json({message: 'Invalid user in refresh token'})
    // If the user is logged out, then send an error
    if (!user.login) return res.status(401).json({message: 'User is signed out'})
    req.user=user;
    // set the new access token and send it along
    next();
  } catch (e) {
    // This means that the refresh token has expired
    console.error(e)
    return res.status(401).json({message: "Invalid refresh token"})
  }
}

const validateAccessToken = async (req, res, next) => {
// Grabs tokens from their respective places
  const accessToken = req.headers.authorization?.split(" ")[1];
  console.log("Accesstoken", accessToken)

  if (!accessToken) return res.status(401).json({message: "Access token missing"});

  // Validates the tokens
  try{
    console.log("\n\nTrying Access Token\n\n")
    const jwtPayload = jwt.verify(accessToken, accessSecret);
    const userId = jwtPayload.data.id;

    // Assuming that no errors were thrown, get the current user
    // to make sure that the user sent through the token exists
    const user = await User.scope('currentUser').findOne({
      where: {id: userId}
    })

    // if they don't then let the frontend know that the user in the token
    // doesn't exist
    if (!user) {
      res.status(401).json({message: "Invalid user in token"})
    }

    // Now you know that the user and the token both exist, so send the user
    // along to the next middleware
    req.user = user;
    next();
    // This catch is reached if the validation of the access token fails
  } catch (e) {
    // If the token has expired, use the refresh token to generate a new one
    if (e.name === 'TokenExpiredError') {
      res.status(403).json({message: "Invalid Access Token. Token Expired"})
    }
}
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

    if (user.Role ["name"] === "Admin") {
      next() 
    } else {
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

// const // requireAuth = [
//   restoreUser,
//   function (req, res, next) {
//     if (req.user) return next();

//     const err = new Error("Unauthorized");
//     err.title = "Unauthorized";
//     err.errors = ["Unauthorized"];
//     err.status = 401;
//     return next(err);
//   },
// ];

module.exports = {
  validateAccessToken,
  validateRefreshToken,
  generateAccessToken,
  setTokens,
  requireBasic,
  requireBusiness,
  requireModeration,
  // // requireAuth,
  requireAdmin
};
