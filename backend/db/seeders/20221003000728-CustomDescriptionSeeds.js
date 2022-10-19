'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkInsert('CustomDescriptions', [
        {
          userId: 1,
          thingToDoId: 1,
          description: "Walking through the woods with all your things to a given destination",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingToDoId: 2,
          description: "Sounds that come together to make something that sounds good to the human ear",
          upvotes: 120,
          downvotes: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingToDoId: 3,
          description: "make an object make sounds that humans like",
          upvotes: 100,
          downvotes: 90,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          thingToDoId: 4,
          description: "learn how to say hello in a new way to people who don't know how to say hello",
          upvotes: 101,
          downvotes: 39,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 1,
          description: "An epic adventure where you bring everything you need to live for a duration of time and survive",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 1,
          description: "hiking but with extra steps",
          upvotes: 10,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          thingToDoId: 1,
          description: "A way to gain new insights about life as you journey to the great outdoors with everything you need to live for as long as you are backpacking",
          upvotes: 1,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 2,
          description: "lorem ipsum",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 11,
          description: "lorem ipsum",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          thingToDoId: 6,
          description: "lorem ipsum",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          thingToDoId: 6,
          description: "lorem ipsum",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          thingToDoId: 6,
          description: "lorem ipsum",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 6,
          description: "lorem ipsum",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          thingToDoId: 5,
          description: "Hayyyyaaaahhh!!",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          thingToDoId: 5,
          description: "dancing that hurts others",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          thingToDoId: 5,
          description: "A good exercise to keep off weight developed by people in asia and europe",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          thingToDoId: 5,
          description: "A way to defend yourself against foes with just your body",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 4,
          description: "Express ideas in a different way to others",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 3,
          description: "Take something that is designed to make cool sounds and make it make those sounds",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          thingToDoId: 2,
          description: "Make beeps and boops sound like something cool with instruments and synths",
          upvotes: 100,
          downvotes: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
