/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('project_bahan_lain', {
      ...ZygoteModel,
      project_bahan_lain_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_bahan_lain_project_kerja_kode: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      project_bahan_lain_nama: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      project_bahan_lain_qty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_bahan_lain_harga: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_bahan_lain_status: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: 'A'
      },
      project_bahan_lain_revisi: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      project_bahan_lain_user_revisi: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      project_bahan_lain_ket1: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      project_bahan_lain_ket2: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('project_bahan_lain')
  }
}
