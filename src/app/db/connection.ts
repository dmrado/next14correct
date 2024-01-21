import { config } from 'dotenv';
import { Sequelize } from "sequelize"
import mysql2 from 'mysql2'
config()

export const sequelize = new Sequelize({
        port: Number(process.env.DB_PORT),
        username: process.env.DB_LOGIN,
        password: process.env.DB_PASSWORD,
        dialect: 'mysql',
        dialectModule: mysql2,
        database: 'next14correct_development',
}) as Sequelize