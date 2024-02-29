/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('supplier', {
      ...ZygoteModel,
      supplier_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      supplier_alamat: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      supplier_kota: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      supplier_kontak_person: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      supplier_email: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      supplier_telp1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      supplier_telp2: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      supplier_hp1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      supplier_hp2: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('supplier')
  }
}
