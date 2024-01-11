import Sequelize from "sequelize";

export const connection = new Sequelize({
    dialect: 'mysql',
    dialectModule: require('mysql2'),
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
