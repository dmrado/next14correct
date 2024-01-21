// import { DataTypes } from "sequelize";
// import { connection } from "./connection.tsx";
// import {userType} from "../../../new-types";
//
// export const User: userType = connection.define('users', {
//     name: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false
//     },
//     surname: {
//       type: DataTypes.STRING
//     },
//   }, {
//     // Other model options go here
//   }
// )

import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes} from 'sequelize';
import { sequelize } from "./connection";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    //todo: add unique index, probably using decorators
    declare name: string;
    declare surname: string;
}

// User.sync({force:true})
User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING
        },
        surname:{
            type: DataTypes.STRING
        },
    },
    { sequelize })

User.findAll()
