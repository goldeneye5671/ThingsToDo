const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokens, validateAccessToken, validateRefreshToken, generateAccessToken } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

const validateLogin = [
    check('credential')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a valid email or username.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password.'),
    handleValidationErrors,
];

router.post("/refresh", validateRefreshToken, asyncHandler((req, res, next) => {
  const accessToken = generateAccessToken(req.user);
  res.json({accessToken, user: req.user})
}))


  router.post(
    '/',
    validateLogin,
    asyncHandler(async (req, res, next) => {
      try{
        const { credential, password } = req.body;
  
        const user = await User.login({ credential, password });
    
        if (!user) {
          const err = new Error('Login failed');
          err.status = 401;
          err.title = 'Login failed';
          err.errors = ['The provided credentials were invalid.'];
          return next(err);
        }
    
        setTokens(res, user);
      } catch (e) {
        console.error(e);
      }
    }),
  );
  
    router.post(
      '/signup',
      asyncHandler(async (req, res, next) => {
        try {
          const {
            firstName,
            lastName,
            profilePicture,
            bio,
            username,
            email,
            password
          } = req.body
          

        const user = await User.signup({
          username,
          email,
          firstName,
          lastName,
          profileImage: profilePicture,
          bio,
          hashedPassword: password
        })
          res.json(user);
        } catch (e){
          next(e)
        }
      })
    )

  router.delete(
    '/',
    validateAccessToken,
    (_req, res) => {
      res.clearCookie('jwt');
      return res.json({ message: 'success' });
    }
  );
  
module.exports = router;
