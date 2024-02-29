/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('warna', {
      ...ZygoteModel,
      warna_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      warna_nama: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      warna_kode_bahan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      warna_harga: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      warna_nilai1: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      warna_nilai2: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      warna_ket1: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      warna_ket2: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('warna')
  }
}
