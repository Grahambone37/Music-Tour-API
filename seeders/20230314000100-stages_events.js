'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages_events', [{
      stage_id: 1,
      event_id: 4,
      stage_event_cost: '$50',
      stage_event_date: '2022-02-02'
    }, {
      stage_id: 3,
      event_id: 1,
      stage_event_cost: '$50',
      stage_event_date: '2023-01-01'
      }, {
      stage_id: 2,
      event_id: 3,
      stage_event_cost: '$49',
      stage_event_date: '2025-12-14'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages_events', null, {})
  }
};
