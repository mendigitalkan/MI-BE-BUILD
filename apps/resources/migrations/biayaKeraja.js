/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('biaya_kerja', {
      ...ZygoteModel,
      biaya_kerja_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      biaya_kerja_nama: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      biaya_kerja_kapasitas: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      biaya_kerja_harga: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      biaya_kerja_nilai1: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      biaya_kerja_nilai2: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      biaya_kerja_ket1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      biaya_kerja_ket2: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('biaya_kerja')
  }
}
