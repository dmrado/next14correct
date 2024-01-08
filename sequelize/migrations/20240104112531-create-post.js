'use strict';
import User from "@/app/db/post.model"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: User,
          key: 'id'
        }
      },
      title: {type: Sequelize.STRING, allowNull: false},
      text: {type: Sequelize.TEXT, allowNull: false},
      previewId: Sequelize.STRING,
      htmlBody: Sequelize.TEXT,
      imgLink: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.fn('now')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};
