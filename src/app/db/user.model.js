import { DataTypes } from "sequelize";
import { connection } from "./connection.js";

export const User = connection.define('users', {
    // todo требует наличия такого же поля с таким же типом данных. Так ка мы импортируем сразу из модели, а не из БД, видимо надо добавить в модель User такое же поле и на всякий случай с дефолтным значением
    // userId: {
    //     type: DataTypes.STRING,
    //     defaultValue: '1'
    // },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING
    },
    // xx: DataTypes.INTEGER
  }, {
    // Other model options go here
  }
)
