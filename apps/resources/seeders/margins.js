/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('margins', [
      {
        margin_kode: '00024',
        margin_qty_min: 1000000,
        margin_qty_max: 1001,
        margin_harga_min: 1000000,
        margin_margin: 20
      },
      {
        margin_kode: '00023',
        margin_qty_min: 1000000,
        margin_qty_max: 1001,
        margin_harga_min: 0,
        margin_margin: 25
      },
      {
        margin_kode: '00022',
        margin_qty_min: 1000,
        margin_qty_max: 501,
        margin_harga_min: 1000000,
        margin_margin: 25
      },
      {
        margin_kode: '00021',
        margin_qty_min: 1000,
        margin_qty_max: 501,
        margin_harga_min: 0,
        margin_margin: 30
      },
      {
        margin_kode: '00020',
        margin_qty_min: 500,
        margin_qty_max: 101,
        margin_harga_min: 1000000,
        margin_margin: 30
      },
      {
        margin_kode: '00019',
        margin_qty_min: 500,
        margin_qty_max: 101,
        margin_harga_min: 0,
        margin_margin: 40
      },
      {
        margin_kode: '00018',
        margin_qty_min: 100,
        margin_qty_max: 51,
        margin_harga_min: 1000000,
        margin_margin: 40
      },
      {
        margin_kode: '00017',
        margin_qty_min: 100,
        margin_qty_max: 51,
        margin_harga_min: 50000,
        margin_margin: 75
      },
      {
        margin_kode: '00016',
        margin_qty_min: 100,
        margin_qty_max: 51,
        margin_harga_min: 0,
        margin_margin: 100
      },
      {
        margin_kode: '00015',
        margin_qty_min: 1,
        margin_qty_max: 50,
        margin_harga_min: 1000000,
        margin_margin: 50
      },
      {
        margin_kode: '00014',
        margin_qty_min: 1,
        margin_qty_max: 50,
        margin_harga_min: 50000,
        margin_margin: 100
      },
      {
        margin_kode: '00013',
        margin_qty_min: 1,
        margin_qty_max: 50,
        margin_harga_min: 0,
        margin_margin: 125
      },
      {
        margin_kode: '00012',
        margin_qty_min: 1000000,
        margin_qty_max: 1001,
        margin_harga_min: 1000000,
        margin_margin: 25
      },
      {
        margin_kode: '00011',
        margin_qty_min: 1000000,
        margin_qty_max: 1001,
        margin_harga_min: 0,
        margin_margin: 30
      },
      {
        margin_kode: '00010',
        margin_qty_min: 1000,
        margin_qty_max: 501,
        margin_harga_min: 1000000,
        margin_margin: 30
      },
      {
        margin_kode: '00009',
        margin_qty_min: 1000,
        margin_qty_max: 501,
        margin_harga_min: 0,
        margin_margin: 35
      },
      {
        margin_kode: '00008',
        margin_qty_min: 500,
        margin_qty_max: 101,
        margin_harga_min: 1000000,
        margin_margin: 40
      },
      {
        margin_kode: '00007',
        margin_qty_min: 500,
        margin_qty_max: 101,
        margin_harga_min: 0,
        margin_margin: 60
      },
      {
        margin_kode: '00006',
        margin_qty_min: 100,
        margin_qty_max: 51,
        margin_harga_min: 1000000,
        margin_margin: 60
      },
      {
        margin_kode: '00005',
        margin_qty_min: 100,
        margin_qty_max: 51,
        margin_harga_min: 50000,
        margin_margin: 100
      },
      {
        margin_kode: '00004',
        margin_qty_min: 100,
        margin_qty_max: 51,
        margin_harga_min: 0,
        margin_margin: 125
      },
      {
        margin_kode: '00003',
        margin_qty_min: 1,
        margin_qty_max: 50,
        margin_harga_min: 1000000,
        margin_margin: 70
      },
      {
        margin_kode: '00002',
        margin_qty_min: 1,
        margin_qty_max: 50,
        margin_harga_min: 50000,
        margin_margin: 125
      },
      {
        margin_kode: '00001',
        margin_qty_min: 1,
        margin_qty_max: 50,
        margin_harga_min: 0,
        margin_margin: 150
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('margins', null, {})
  }
}
