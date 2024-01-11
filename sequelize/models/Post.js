'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    //todo userId может понадобится для выяснения кто добавил статью, естественно с разрешения админа
    userId: {
      type: DataTypes.INTEGER
    },
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.TEXT, allowNull: false},
    previewId: DataTypes.STRING,
    htmlBody: DataTypes.TEXT,
    imgLink: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Post',
    timestamps: true
  });
  return Post
};
