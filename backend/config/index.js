module.exports = {
  environment: process.env.NODE_ENV || "development",
  // environment: "production",
  port: process.env.PORT || 8080,
  sessionSecret: process.env.SESSION_SECRET,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  jwtConfig: {
    refreshSecret: process.env.REFRESH_JWT_SECRET,
    refreshExpiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
    accessSecret: process.env.ACCESS_JWT_SECRET,
    accessExpiresIn: process.env.ACCESS_JWT_EXPIRES_IN
  },
};
