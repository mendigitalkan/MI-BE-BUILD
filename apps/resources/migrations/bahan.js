/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('bahan', {
      ...ZygoteModel,
      bahan_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      bahan_nama: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      bahan_panjang: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bahan_lebar: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bahan_tebal: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bahan_produksi: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      bahan_harga: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      bahan_supplier: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      bahan_status: {
        type: DataTypes.STRING(1),
        allowNull: false
      },
      bahan_nilai1: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      bahan_nilai2: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      bahan_ket1: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      bahan_ket2: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('bahan')
  }
}
