/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('cetakan', {
      ...ZygoteModel,
      cetakan_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      cetakan_nama: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cetakan_satuan: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cetakan_harga: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      cetakan_ket1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cetakan_ket2: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('cetakan')
  }
}
