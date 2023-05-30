"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
    // {
    /*
     *  Backpacking
     *  Music Creation
     *  Learn An Instrument
     *  Learn A new Language
     *  Martial Arts
     *  Art Classes
     *  Soccer
     *  Football
     *  Rugby
     *  Cooking Classes
     *  Become a Social Media Influencer
     *  Hiking
     *  Visit a Park
     *  Learn a Programming Language
     *  Become a Pro Gamer
     *  Start a Business
     *  Become a Day Trader
     *  Car Maintenance
     */
    // }
    return queryInterface.bulkInsert(
      "ThingsToDos",
      [
        {
          thingName: "Backpacking",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Music Creation",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Learn an Instrument",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Learn a Language",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Martial Arts",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Art Classes",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Soccer",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Football",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Rugby",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Ultimate Frisbee",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Visit a Park",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Become a Day Trader",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Become a Real Estate Agent",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Play Ga Ga Ball",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Thrift Shopping",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Become the next Top Chef",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Visit an Amusement Park",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Volunteering",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Kayaking",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "White Water Rafting",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Ice Skating",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Rollerskating/Rollerblading",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Start a Business",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Sell at a farmers Market",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Visit a Restaurant",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Visit a Museum",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Visit National Landmarks",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Horseback Riding",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Go Karts",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Sledding",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Ski",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Cross Country Ski",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Snowboarding",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "local events",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Become a racing champion",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Road Trip",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Go to a Concert",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Become a Music Star Sensation",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Become a Hair Stylist",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Become an Actor",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Visit Haunted Houses",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Create a Film",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Wine Tasting Tour",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Garage sale Hunting",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Flee Market Hunter",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Film Fests",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Fruit/Plant Picking",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Grow a Garden",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Tour a Cavenrn/Cave",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Grow some Flowers",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "visit/participate in a Parade",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          thingName: "Small Boat Sailing",
          thingDescription: "lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("ThingsToDos", null, {});
  },
};
