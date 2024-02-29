/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('project_gambar', {
      ...ZygoteModel,
      project_gambar_kode: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      project_gambar_project_kerja_kode: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      project_gambar_url: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('project_gambar')
  }
}
