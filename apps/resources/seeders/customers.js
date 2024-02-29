/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        customer_kode: 'qwee3',
        customer_alamat: 'Jaksel',
        customer_kota: 'Jakarta',
        customer_kontak_person: '093434332432',
        customer_email: 'usertest1@mail.com',
        customer_nama: 'usertest1',
        customer_telp1: '09234334454',
        customer_telp2: '09433412333',
        customer_hp1: '343343',
        customer_hp2: '3432432',
        customer_status: 'status 1',
        customer_sales: 'nama sales',
        customer_ket1: 'lorem ipsum'
      },
      {
        customer_kode: '32qwe',
        customer_alamat: 'Bandung',
        customer_kota: 'Bandung',
        customer_kontak_person: '0933334332432',
        customer_email: 'usertest2@mail.com',
        customer_nama: 'usertest2',
        customer_telp1: '09234334454',
        customer_telp2: '09433412333',
        customer_hp1: '343343',
        customer_hp2: '3432432',
        customer_status: 'status 2',
        customer_sales: 'nama sales 2',
        customer_ket1: 'lorem ipsum'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {})
  }
}
