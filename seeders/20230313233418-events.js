'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      event_name: 'Music Mix',
      event_start_time: '5pm PST',
      event_end_time: '7pm PST',
      event_length_minutes: 120
    }, {
      event_name: 'Meet The Fans',
      event_start_time: '1pm PST',
      event_end_time: '3pm PST',
      event_length_minutes: 120
    }, {
      event_name: 'The Big Hits',
      event_start_time: '8am EST',
      event_end_time: '12pm EST',
      event_length_minutes: 240
      }, {
      event_name: 'Some Songs',
      event_start_time: '3:15pm PST',
      event_end_time: '5pm PST',
      event_length_minutes: 105
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};
