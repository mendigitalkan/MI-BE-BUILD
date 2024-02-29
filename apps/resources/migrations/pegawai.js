/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('pegawai', {
      ...ZygoteModel,
      pegawai_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      pegawai_nama: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_alamat: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_hp1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_hp2: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_email: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_no_ktp: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_pangkat: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_tgl_kerja: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_ket1: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_ket2: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pegawai_jabatan: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('pegawai')
  }
}
