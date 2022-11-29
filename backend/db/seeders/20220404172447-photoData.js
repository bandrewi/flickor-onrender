'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Photos', [
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        content: 'Fox'
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'Hamster'
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        content: 'Turtle'
      },
      {
        userId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        content: 'Sunrise'
      },
      {
        userId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        content: 'Lake'
      },
      {
        userId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648912607168-88b8db633771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        content: 'Yogurt'
      },
      {
        userId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'Japan'
      },
      {
        userId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdhbGxwYXBlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'Train'
      },
      {
        userId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhbGxwYXBlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'Sky'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
