import { config } from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import mysql2 from 'mysql2'

config()

export const sequelize = new Sequelize({
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.DB_HOST || '222.22.3.1',
    username: process.env.DB_LOGIN,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    dialectModule: mysql2,
    database: process.env.DB_NAME,
}) as Sequelize

console.log('sequelize', sequelize)
console.log('sequelize', process.env.DB_HOST)
