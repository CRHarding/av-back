'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Avmaints', [{

    acmodel: "A35",
    engmodel: "O-470",
    ttaf: 2200,
    ttsn: 2200,
    smoh: 600,
    annualinsp: true,
    awdirectives: true,
    damagehist: false,
    createdAt: "2020-03-10",
    updatedAt: "2021-03-10"
  },
  {
    acmodel: "C172",
    engmodel: "O-320",
    ttaf: 3300,
    ttsn: 3200,
    smoh: 1000,
    annualinsp: true,
    awdirectives: true,
    damagehist: false,
    createdAt: "2019-03-10",
    updatedAt: "2021-03-10"
  },
  {
    acmodel: "C150",
    engmodel: "O-235",
    ttaf: 5500,
    ttsn: 3200,
    smoh: 2000,
    annualinsp: true,
    awdirectives: true,
    damagehist: true,
    createdAt: "2018-03-10",
    updatedAt: "2021-03-10"
  },
  {
    acmodel: "C195",
    engmodel: "R-670",
    ttaf: 5700,
    ttsn: 3200,
    smoh: 1800,
    annualinsp: true,
    awdirectives: true,
    damagehist: true,
    createdAt: "2017-03-10",
    updatedAt: "2021-03-10"
  },
  {
    acmodel: "C180",
    engmodel: "O-470",
    ttaf: 5100,
    ttsn: 2200,
    smoh: 2200,
    annualinsp: true,
    awdirectives: true,
    damagehist: true,
    createdAt: "2016-03-10",
    updatedAt: "2021-03-10"
  },
  {
    acmodel: "PA28",
    engmodel: "O-320",
    ttaf: 4300,
    ttsn: 2200,
    smoh: 2200,
    annualinsp: true,
    awdirectives: true,
    damagehist: false,
    createdAt: "2015-03-10",
    updatedAt: "2021-03-10"
  },
  {
    acmodel: "J3",
    engmodel: "C65",
    ttaf: 4300,
    ttsn: 3500,
    smoh: 1500,
    annualinsp: true,
    awdirectives: true,
    damagehist: true,
    createdAt: "2014-03-10",
    updatedAt: "2021-03-10"
  },
  {
    acmodel: "M20",
    engmodel: "O-360",
    ttaf: 2800,
    ttsn: 2800,
    smoh: 700,
    annualinsp: true,
    awdirectives: true,
    damagehist: false,
    createdAt: "2013-03-10",
    updatedAt: "021-03-10"
  },
], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
