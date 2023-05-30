"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.bulkInsert(
      "ExperiencePhotos",
      [
        {
          experienceId: 1,
          url: "https://www.thermarest.com/blog/wp-content/uploads/2017/08/WhatsInMyPackFamilyCamping.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4LrcDcXqD7ux2FF3M8c8-0ibiT3ILWBMQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 3,
          url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503517/1363938/main-image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 4,
          url: "https://i.pinimg.com/originals/c3/92/39/c3923961c3f6a19566005c2e4170fbcf.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 5,
          url: "https://cdn.britannica.com/07/145407-050-8DBD77E9/belts.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 6,
          url: "https://www.thermarest.com/blog/wp-content/uploads/2017/08/WhatsInMyPackFamilyCamping.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 7,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4LrcDcXqD7ux2FF3M8c8-0ibiT3ILWBMQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 8,
          url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503517/1363938/main-image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 9,
          url: "https://i.pinimg.com/originals/c3/92/39/c3923961c3f6a19566005c2e4170fbcf.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 10,
          url: "https://cdn.britannica.com/07/145407-050-8DBD77E9/belts.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 11,
          url: "https://www.thermarest.com/blog/wp-content/uploads/2017/08/WhatsInMyPackFamilyCamping.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 12,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4LrcDcXqD7ux2FF3M8c8-0ibiT3ILWBMQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 13,
          url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503517/1363938/main-image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 14,
          url: "https://i.pinimg.com/originals/c3/92/39/c3923961c3f6a19566005c2e4170fbcf.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 15,
          url: "https://cdn.britannica.com/07/145407-050-8DBD77E9/belts.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 16,
          url: "https://www.thermarest.com/blog/wp-content/uploads/2017/08/WhatsInMyPackFamilyCamping.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 17,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4LrcDcXqD7ux2FF3M8c8-0ibiT3ILWBMQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 18,
          url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503517/1363938/main-image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 19,
          url: "https://i.pinimg.com/originals/c3/92/39/c3923961c3f6a19566005c2e4170fbcf.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 20,
          url: "https://cdn.britannica.com/07/145407-050-8DBD77E9/belts.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 21,
          url: "https://www.thermarest.com/blog/wp-content/uploads/2017/08/WhatsInMyPackFamilyCamping.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 22,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4LrcDcXqD7ux2FF3M8c8-0ibiT3ILWBMQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 23,
          url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503517/1363938/main-image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 24,
          url: "https://i.pinimg.com/originals/c3/92/39/c3923961c3f6a19566005c2e4170fbcf.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          experienceId: 25,
          url: "https://cdn.britannica.com/07/145407-050-8DBD77E9/belts.jpg",
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
      */
    return queryInterface.bulkDelete("ExperiencePhotos", null, {});
  },
};
