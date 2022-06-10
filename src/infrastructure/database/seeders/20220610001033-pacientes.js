"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];
for (let i = 0; i < 10; i++) {
  let fakeName = faker.name.findName();
  let fakeEmail = faker.internet.email();
   seed.push({
      nome: fakeName,
      email: fakeEmail,
      idade: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
   });
}

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("pacientes", seed);
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("pacientes", null, {});
   },
};
