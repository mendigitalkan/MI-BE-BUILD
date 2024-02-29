/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('project_kerja', {
      ...ZygoteModel,
      project_kerja_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_kerja_customer: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_kerja_customer_nama: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      project_kerja_tgl_input: {
        type: DataTypes.STRING,
        allowNull: false
      },
      project_kerja_tgl_approve: {
        type: DataTypes.STRING,
        allowNull: true
      },
      project_kerja_deadline: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      project_kerja_pinalti: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      project_kerja_sales: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      project_kerja_nilai_project: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      project_kerja_status: {
        type: DataTypes.ENUM('NEW', 'APP', 'PRG', 'FNH'),
        allowNull: true,
        defaultValue: 'NEW'
      },
      project_kerja_approval: {
        type: DataTypes.STRING(5),
        allowNull: true
      },
      project_kerja_ket_proses: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      project_kerja_ket1: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      project_kerja_ket2: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      project_kerja_disc: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('project_kerja')
  }
}
