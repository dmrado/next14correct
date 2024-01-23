// import { DataTypes } from "sequelize";
// import { connection } from "./connection.tsx";
// import {User} from "./user.model.tsx";
// import {postType} from '../../../new-types'

// todo define ниже не подсвечена как функция, что то не то ст типом в файле new-types.d.ts
// export const Post: postType = connection.define('posts', {
//     title: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false
//     },
//     text: {
//       type: DataTypes.STRING
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: User,
//         key: 'id'
//         }
//       },
//     }, {
//      // Other model options go here
//     }
// )
// }


import { Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, DataTypes } from 'sequelize';
import {User} from "./user.model";
import {sequelize} from "./connection";

export class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare text: string;
    // declare updatedAt: any;
    // declare userId: ForeignKey<User['id']>;
}

// Post.belongsTo(User)
// Post.sync({force: true})
Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title:{
        type: DataTypes.STRING
    },
    text:{
        type: DataTypes.STRING
    },
        // updatedAt: DataTypes.STRING
    },
    { sequelize })
