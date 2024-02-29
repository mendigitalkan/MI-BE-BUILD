/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('margins', {
      ...ZygoteModel,
      margin_kode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      margin_qty_min: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      margin_qty_max: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      margin_harga_min: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      margin_margin: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('margins')
  }
}
