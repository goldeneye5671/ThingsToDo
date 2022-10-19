'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', 
      [
        {
          username: "civiliansweet",
          email: "testmail1@test.com",
          firstName: "Jane",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "obsoletecivilian",
          email: "testmail2@test.com",
          firstName: "Johnny",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "claycivilian",
          email: "testmail3@test.com",
          firstName: "Barb",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "sweetvordere",
          email: "testmail4@test.com",
          firstName: "Bobby",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "liverdestroyer",
          email: "testmail5@test.com",
          firstName: "Tim",
          lastName: "App",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "kingdededeee",
          email: "testmail6@test.com",
          firstName: "Adam",
          lastName: "Test",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "iamthemostwanted",
          email: "testmail7@test.com",
          firstName: "Joshua",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "joe_who?",
          email: "testmail8@test.com",
          firstName: "Joe",
          lastName: "Mama",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "driftAway123",
          email: "testmail9@test.com",
          firstName: "James",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "sinkingTheLucitania",
          email: "testmail10@test.com",
          firstName: "Ivan",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "Goldeneye123",
          email: "testmail11@test.com",
          firstName: "Anthony",
          lastName: "Seefried",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "Shaddow07",
          email: "testmail12@test.com",
          firstName: "Julius",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "thesteakandskake",
          email: "testmail13@test.com",
          firstName: "Jack",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "civiliannightmare",
          email: "testmail14@test.com",
          firstName: "Jill",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "yourworstnightmare",
          email: "testmail15@test.com",
          firstName: "Jose",
          lastName: "Tester",
          profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gull_ca_usa.jpg/1200px-Gull_ca_usa.jpg",
          bio: "lorem ipsum",
          hashedPassword: "ThingsToDoTesting123!",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkDelete('Users', null, {});
  }
};
