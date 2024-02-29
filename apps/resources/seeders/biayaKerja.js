/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('biaya_kerja', [
      {
        biaya_kerja_kode: '00001',
        biaya_kerja_nama: 'DISPLAY BASIC',
        biaya_kerja_kapasitas: 50,
        biaya_kerja_harga: 3000,
        biaya_kerja_nilai1: 0,
        biaya_kerja_nilai2: 0,
        biaya_kerja_ket1: '-',
        biaya_kerja_ket2: '-'
      },
      {
        biaya_kerja_kode: '00002',
        biaya_kerja_nama: 'DISPLAY MEDIUM',
        biaya_kerja_kapasitas: 30,
        biaya_kerja_harga: 5000,
        biaya_kerja_nilai1: 0,
        biaya_kerja_nilai2: 0,
        biaya_kerja_ket1: '-',
        biaya_kerja_ket2: '-'
      },
      {
        biaya_kerja_kode: '00003',
        biaya_kerja_nama: 'DISPLAY HARD',
        biaya_kerja_kapasitas: 10,
        biaya_kerja_harga: 15000,
        biaya_kerja_nilai1: 0,
        biaya_kerja_nilai2: 0,
        biaya_kerja_ket1: '-',
        biaya_kerja_ket2: '-'
      },
      {
        biaya_kerja_kode: '00004',
        biaya_kerja_nama: 'DISPLAY KOSMETIK',
        biaya_kerja_kapasitas: 1,
        biaya_kerja_harga: 150000,
        biaya_kerja_nilai1: 0,
        biaya_kerja_nilai2: 0,
        biaya_kerja_ket1: '-',
        biaya_kerja_ket2: '-'
      },
      {
        biaya_kerja_kode: '00005',
        biaya_kerja_nama: 'PLAKAT',
        biaya_kerja_kapasitas: 1,
        biaya_kerja_harga: 100000,
        biaya_kerja_nilai1: 0,
        biaya_kerja_nilai2: 0,
        biaya_kerja_ket1: '-',
        biaya_kerja_ket2: '-'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('biaya_kerja', null, {})
  }
}
