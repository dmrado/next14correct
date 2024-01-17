import { config } from 'dotenv';
import Sequelize from "sequelize"
import mysql2 from 'mysql2'
import {connectionType} from "../../../new-types";
config()

console.log(' process.env.DB_PORT', process.env.DB_PORT)

// todo: load secrets from env file
export const connection: connectionType = new Sequelize({
    dialect: 'mysql',
    dialectModule: mysql2,
    host: 'localhost',
    port: process.env.DB_PORT,
    username: process.env.DB_LOGIN,
    password: process.env.DB_PASSWORD,
    database: 'next14correct_development',
});

//   dialect: 'mysql',
//   dialectModule: require('mysql2'),
//   host: 'localhost',
//   port: 3306,
//   username: 'admin',
//   password: '123',
//   database: 'nextjs',
