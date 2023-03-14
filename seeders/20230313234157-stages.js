'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [{
      stage_state: 'California',
      stage_address: '7234-Mid-Street',
      stage_size: '400-800 ft'
    }, {
      stage_state: 'Washington',
      stage_address: '2345-place-place',
      stage_size: '500-800 ft'
      }, {
      stage_state: 'New York',
      stage_address: 'The-Place',
      stage_size: '300-450 ft'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {})
  }
};
