# Things To Do App

## About

This is a simple web application to help users find a new and interesting thing to do. The user can also use lists to track what things they want to do, and mark them as completed. Users can also create custom descriptions on existing things to do, write descriptions, upvote and downvote those descriptions, and post experiences that thay have done with that thing to do.

## About the Stack

### Backend

- Express.js
- Sequelize
- PostgreSQL

### Frontend

- React.js
- Redux
- Tailwind


## How to run
### Pre-reqs:

- The latest version of PostgreSQL must be installed
- Node 16 or newer must be used

### Steps to run

1. Clone the project and CD into the ```backend``` directory
2. Run ```npm install -y```
3. Configure a .env file according to the ```.env.example``` file
4. Configure a .sequelizerc file according to the ```.sequelizerc.example``` file. If that is not working reference the Sequelize documentation
5. Create a user in the DB with ```CreateDB``` permissions
6. Run the following commands
 a. ```npx dotenv sequelize db:create```
 b. ```npx dotenv sequelize db:migrate```
 c. ```npx dotenv sequelize db:seed:all```
7. Run ```npm run start``` to start the app
