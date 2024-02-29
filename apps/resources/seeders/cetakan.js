/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cetakan', [
      {
        cetakan_kode: '00001',
        cetakan_nama: 'LASER CUTTING',
        cetakan_satuan: 'CM',
        cetakan_harga: 20,
        cetakan_ket1: '-',
        cetakan_ket2: '-'
      },
      {
        cetakan_kode: '00002',
        cetakan_nama: 'MANUAL',
        cetakan_satuan: 'CM',
        cetakan_harga: 5,
        cetakan_ket1: '-',
        cetakan_ket2: '-'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cetakan', null, {})
  }
}
