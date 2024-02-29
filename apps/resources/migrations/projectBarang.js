/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('project_barang', {
      ...ZygoteModel,
      project_barang_kode_project: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_barang_project_kerja_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      project_barang_brg_project: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      project_barang_nama: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      project_barang_qty: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      project_barang_tipe: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      project_barang_status: {
        type: DataTypes.ENUM('N', 'S', 'A'),
        allowNull: true,
        defaultValue: 'N'
      },
      project_barang_ket_progres: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      project_barang_tgl_app: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      project_barang_nilai_hpp: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      project_barang_disc: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      project_barang_ket_proses: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      project_barang_ket1: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      project_barang_ket2: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('project_barang')
  }
}
