import { DataTypes } from "sequelize";
import { connection } from "./connection.js";
import {User} from "./user.model.js";

export const Post = connection.define('posts', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING
    },
    userId: {
    type: DataTypes.STRING,
        references: {
            model: User,
            key: 'userId'
        }
    }
    }, {
     // Other model options go here
    }
)
