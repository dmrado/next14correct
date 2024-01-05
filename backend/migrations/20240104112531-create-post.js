'use strict';
module.exports = {
  // а как создавалась эта миграция и зачем? Почеу она не испоьзует модель пост а дублирует код?
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        // а зачем мы описываем id?
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        // это должен быть наверное foreign key (вторичный ключ)
        type: Sequelize.STRING
      },
      // я бы не стал тайт разрешать "нулл". Более того, я бы его еще и уникальным сделал
      title: {type: Sequelize.STRING, allowNull: false},
      text: {type: Sequelize.TEXT, allowNull: false},
      // а это что такое? Это ссылка на картинку?
      previewId: Sequelize.STRING,
      // а чем текст и хтмл боди отличается?
      htmlBody: Sequelize.TEXT,
      // а у статьи не может быть несколько картинок? А картинки могут быть только в заголовке или прям в тексте?
      imgLink: Sequelize.STRING,
      // https://sequelize.org/docs/v7/models/auto-timestamps/
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};
