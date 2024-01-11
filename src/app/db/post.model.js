import { DataTypes } from "sequelize";
import { connection } from "./connection.js";



export const Post = connection.define('posts', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING
    },
    }, {
     // Other model options go here
    }
)
