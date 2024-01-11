import Sequelize from "sequelize";
import mysql2 from 'mysql2'

// todo: load secrets from env file
export const connection = new Sequelize({
    dialect: 'mysql',
    dialectModule: mysql2,
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: '123',
    database: 'nextjs',
});

//   dialect: 'mysql',
//   dialectModule: require('mysql2'),
//   host: 'localhost',
//   port: 3306,
//   username: 'admin',
//   password: '123',
//   database: 'nextjs',
