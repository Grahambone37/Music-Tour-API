'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      band_name: 'Epic Music Guys',
      band_members: 'Bob, Bill, and Joe',
      band_songs: 'Rockin, Floating, Dancing'
    }, {
      band_name: 'Soaring Stars',
      band_members: 'Chris, Michael, Kristina, Ashley',
      band_songs: 'Breakdance, Trapped in a Whirlpool, Index'
      }, {
      band_name: 'The Crew',
      band_members: 'Steve, Jill, Greg, and Jacab',
      band_songs: 'Pirate Shanty, Out at Sea, The Longest Storm'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {})
  }
};
