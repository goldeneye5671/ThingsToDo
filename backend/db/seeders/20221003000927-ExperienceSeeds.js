'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
      return queryInterface.bulkInsert('Experiences', [
        {
          userId:1,
          thingToDoId: 1,
          title: "Experience 1 with backpacking",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:1,
          thingToDoId: 2,
          title: "Experience 2 with Music Creation",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:1,
          thingToDoId: 3,
          title: "Experience 3 with Learning an Instrument",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:1,
          thingToDoId: 4,
          title: "Experience 4 with Learning a Language",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:1,
          thingToDoId: 5,
          title: "Experience 5 with Learning Martial Arts",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:2,
          thingToDoId: 1,
          title: "My Experience One: Backpacking",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:2,
          thingToDoId: 2,
          title: "My Experience Two: Music Creation",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:2,
          thingToDoId: 3,
          title: "My Experience Three: Learning an Instrument",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:2,
          thingToDoId: 4,
          title: "My Experience Four: Learn a Language",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:2,
          thingToDoId: 5,
          title: "My Experience Five: Martial Arts",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:3,
          thingToDoId: 1,
          title: "The Time I went Backpacking",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:3,
          thingToDoId: 2,
          title: "That Time I tried Making Music",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:3,
          thingToDoId: 3,
          title: "That time I learned the flute",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:3,
          thingToDoId: 4,
          title: "The time I kicked someone in the face",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:3,
          thingToDoId: 5,
          title: "The time I became Picasso",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:4,
          thingToDoId: 1,
          title: "Backpacking is something else",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:4,
          thingToDoId: 2,
          title: "I never thought making music was so fun",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:4,
          thingToDoId: 3,
          title: "Make the trumpet go toot toot",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:4,
          thingToDoId: 4,
          title: "Karate Kick",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:4,
          thingToDoId: 5,
          title: "Making good art is hard but rewarding",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:5,
          thingToDoId: 1,
          title: "Backpacks can get really heavy really fast",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:5,
          thingToDoId: 2,
          title: "It's hard to make good music these days",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:5,
          thingToDoId: 3,
          title: "I learned how to play the Piano and it sucked",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:5,
          thingToDoId: 4,
          title: "I broke my arm in martial arts",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:5,
          thingToDoId: 5,
          title: "I just can't draw",
          description: "Description Test",
          upvotes: 1,
          downvotes: 1,
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
   return queryInterface.bulkDelete('Experiences', null, {});
  }
};
