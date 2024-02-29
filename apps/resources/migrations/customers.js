/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('customers', {
      ...ZygoteModel,
      customer_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      customer_alamat: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_kota: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_kontak_person: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_email: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_nama: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_telp1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_telp2: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_hp1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_hp2: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_status: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_sales: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      customer_ket1: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('customers')
  }
}
