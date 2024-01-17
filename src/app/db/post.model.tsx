import { DataTypes } from "sequelize";
import { connection } from "./connection.tsx";
import {User} from "./user.model.tsx";
import {postType} from '../../../new-types'

// todo define ниже не подсвечена как функция, что то не то ст типом в файле new-types.d.ts
export const Post: postType = connection.define('posts', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
        }
      },
    }, {
     // Other model options go here
    }
)
