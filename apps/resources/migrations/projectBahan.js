/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('project_bahan', {
      ...ZygoteModel,
      project_bahan_kode: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      project_bahan_project_kerja_kode: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      project_bahan_kode_bahan: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_bahan_kode_warna: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_bahan_panjang: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_bahan_lebar: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_bahan_qty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_bahan_luas_bidang: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_bahan_status: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: 'A'
      },
      project_bahan_revisi: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      project_bahan_user_revisi: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      project_bahan_potongan_type: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      project_bahan_ket1: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      project_bahan_ket2: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('project_bahan')
  }
}
