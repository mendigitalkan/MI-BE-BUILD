/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('project_cetak', {
      ...ZygoteModel,
      project_cetak_Kode: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      project_cetak_project_kerja_kode: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      project_cetak_kode_cetak: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_cetak_panjang: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_cetak_lebar: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_cetak_qty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_cetak_status: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: 'A'
      },
      project_cetak_revisi: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      project_cetak_user_revisi: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      project_cetak_ket1: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      project_cetak_ket2: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('project_cetak')
  }
}
