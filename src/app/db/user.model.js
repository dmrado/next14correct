import { DataTypes } from "sequelize";
import { connection } from "./connection.js";



export const User = connection.define('users', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    },
  }, {
    // Other model options go here
  }
)
