"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];
for (let i = 0; i < 10; i++) {
   let fakeName = faker.name.findName();
   let fakeEmail = faker.internet.email();
   seed.push({
      name: fakeName,
      email: fakeEmail,
      apresentacao: "bla bla bla",
      createdAt: new Date(),
      updatedAt: new Date(),
   });
}

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("psicologos", seed);
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("psicologos", null, {});
   },
};
