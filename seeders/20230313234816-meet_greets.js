'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meet_greets', [{
      event_id: 2,
      band_id: 3,
      meet_greet_date: '2080-03-14'
    }, {
      event_id: 2,
      band_id: 2,
      meet_greet_date: '2024-05-30'
      }, {
      event_id: 2,
      band_id: 1,
      meet_greet_date: '2020-11-02'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meet_greets', null, {})
  }
};
