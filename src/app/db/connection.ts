// import { config } from 'dotenv';
import { Sequelize } from "sequelize"
import mysql2 from 'mysql2'
// config()

console.log(' process.env.DB_PORT', process.env.DB_PORT)

// export const sequelize= new Sequelize(
//     'mysql://root@localhost:8889/next14correct_development', {
//         dialect: 'mysql',
//         dialectModule: mysql2,
//         password: 'root'
//     }
// );


export const sequelize= new Sequelize(
    'mysql://admin:123@localhost:3306/nextjs', {
        dialect: 'mysql',
        dialectModule: mysql2,
    }
);

// todo: load secrets from env file
// export const sequelize= new Sequelize(
//     'localhost:3306/nextjs',
//     'admin',
//     '123',{
//     dialect: 'mysql',
//     dialectModule: mysql2,
// });


//   dialect: 'mysql',
//   dialectModule: require('mysql2'),
//   host: 'localhost',
//   port: 3306,
//   username: 'admin',
//   password: '123',
//   database: 'nextjs',
