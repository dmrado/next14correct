import { config } from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import mysql2 from 'mysql2'

config()

export const sequelize = new Sequelize({
    port: Number(process.env.DB_PORT) || 8889,
    username: process.env.DB_LOGIN,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    dialectModule: mysql2,
    database: process.env.DB_NAME,
}) as Sequelize
